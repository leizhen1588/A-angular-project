<template>
  <div class="main-content" id="main-content">
    <div id="echarts"></div>
    <el-popover
      ref="total"
      placement="bottom"
      width="630"
      trigger="click">
      <div style="background-color: #f3f3f3;">
        <el-row :gutter="10" style="padding: 10px;padding-top: 0px">
          <el-col :span="12">
            <div class="title">
              当前精度
            </div>
            <div style="width: 300px;height: 220px" id="echarts1"></div>
          </el-col>
          <el-col :span="12">
            <div class="title">
              Loss:
            </div>
            <div style="width: 300px;height: 220px" id="echarts2"></div>
          </el-col>
          <el-col :span="12">
            <div class="title">
              F1:
            </div>
            <div style="width: 300px;height: 220px" id="echarts3"></div>
          </el-col>
          <el-col :span="12">
            <div class="title">
              模型当前参数:
            </div>
            <div>
              <table style="text-align: center">
                <tr v-for="(value,key) in resultobj">
                  <td class="modelParameter">{{key}}：</td>
                  <td>{{value}}</td>
                </tr>
              </table>
            </div>
          </el-col>
        </el-row>
        <div class="upload">
          <div class="upload-title">
            <i class="el-icon-caret-right"></i>自主学习
          </div>
          <div>
            <el-tabs v-model="uploadType" type="card" @tab-click="">
              <el-tab-pane label="上传恶意样本" name="first" style="margin-bottom: 10px">
                <el-upload
                  class="upload-demo"
                  action="../topicSstc/api/files/singleUpload"
                  :data="{type:'neg'}"
                  :before-upload="beforeUpload"
                  :on-success="uploadSuccess"
                  :on-error="uploadError"
                  multiple
                  :limit="1"
                  :file-list="fileList">
                  <el-button size="small" type="primary">上传恶意样本</el-button>
                </el-upload>
              </el-tab-pane>
              <el-tab-pane label="上传正常样本" name="second" style="margin-bottom: 10px">
                <el-upload
                  class="upload-demo"
                  action="../topicSstc/api/files/singleUpload"
                  :data="{type:'pos'}"
                  :before-upload="beforeUpload"
                  :on-success="uploadSuccess"
                  :on-error="uploadError"
                  multiple
                  :limit="1"
                  :file-list="fileList">
                  <el-button size="small" type="primary">上传正常样本</el-button>
                </el-upload>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </el-popover>
    <el-button class="total-info" v-popover:total>模型总体信息<i class="el-icon-caret-right"></i></el-button>
    <el-popover
      ref="sample"
      placement="bottom"
      width="410"
      trigger="click">
      <div style="margin: 21px 0 14px 0;padding-left: 10px;overflow: hidden">
        <div>
          <el-upload
            class="upload-demo"
            action="../topicSstc/api/files/singleUpload"
            :data="{type:'pre'}"
            :before-upload="beforeUpload"
            :on-success="uploadSuccess"
            :on-error="uploadError"
            multiple
            :limit="1"
            :file-list="fileList">
            <el-button size="small" type="primary">上传文件</el-button>
          </el-upload>
        </div>
        <div  style="margin: 50px 0 0 20px">
          <div class="history_d">历史记录：</div>
          <table style="text-align: center;font-size: 14px">
            <tr v-for="(value,key) in resultobj">
              <td class="modelParameter">{{key}}：</td>
              <td>{{value}}</td>
            </tr>
          </table>
        </div>
      </div>
    </el-popover>
    <el-button class="sample" v-popover:sample>预测样本<i class="el-icon-caret-right"></i></el-button>
    <div class="detail" v-if="showDetail">
      <div>
        <i class="el-icon-close close" @click="closeDetail"></i>
      </div>
      <div style="padding: 0 10px">
        <div class="detail-title">
          弱分类器:
        </div>
        <div class="detail-content">
          alpha={{showDetailData.alpha}} <br>
          v={{showDetailData.v}}
        </div>
        <div class="detail-title">
          特征权重:
        </div>
        <div class="detail-content features">
          <div v-for="(item,key) in showDetailData.features">
            {{key}} : {{item}}
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: '',
    data () {
      return {
        fullscreenLoading: false,
        showTotal: false,
        showDetail: false,
        uploaded: false,
        showDetailData: {},
        uploadType: 'first',
        fileList: [],
        loading: '',
        resultobj: {
          弱学习器个数: '',
          负例样本个数: '',
          power_t: '',
          学习率: '',
          正例样本个数: '',
          gamma: '',
        },
      }
    },
    mounted () {
      this.getAnalysisResults()
      this.getModel()
      $('.main-content').css('height', ($(window).height() - 50) + 'px')
      $(window).resize(function () {
        $('.main-content').css('height', ($(window).height() - 50) + 'px')
      })
    },
    methods: {
      getEchart (data) {
        const $shelf = this
        var allData = [], allLinks = [], chartH = data.length * 60, contentH = $('#main-content').height(),
          scrollH = contentH / (chartH) * chartH
        $('#echarts').css('height', data.length * 60 + 'px')
        $('#main-content').scrollTop(chartH / 2 - scrollH / 2)
        let myCharts = $shelf.$echarts.init(document.getElementById('echarts'))
        for (let a = 0; a < data.length; a++) {
          var features = {}
          for (var key in data[a]) {
            if (key != 'model_alpha' && key != 'model_v') {
              features[key] = data[a][key]
            }
          }
          allData.push({
            name: 'WL' + (a + 1),
            alpha: data[a].model_alpha,
            v: data[a].model_v,
            features: features,
            x: 350,
            y: 20 * a,
            symbol: 'roundRect',
            itemStyle: {
              normal: {
                color: '#ababab',
              },
            },
          })
          allLinks.push({
            source: 'Features',
            target: 'WL' + (a + 1),
          })
          allLinks.push({
            source: 'WL' + (a + 1),
            target: '∑',
            alpha: data[a].model_alpha,
            v: data[a].model_v,
          })
        }
        allLinks.push({
          source: '∑',
          target: 'Output',
          lineStyle: {
            normal: {type: 'solid'},
          },
        })
        allData.push({
          name: 'Features',
          x: 200,
          y: data.length * 10,
          itemStyle: {
            normal: {
              color: '#a2d0f3',
            },
          },
        })
        allData.push({
          name: '∑',
          x: 500,
          y: data.length * 10,
          itemStyle: {
            normal: {
              color: '#c9b00b',
            },
          },
        })
        allData.push({
          name: 'Output',
          x: 650,
          y: data.length * 10,
          itemStyle: {
            normal: {
              color: '#49940d',
            },
          },
        })
        var option = {
          roam: false,
          title: {
            text: '',
          },
          tooltip: {
            formatter: function (a) {
              if (a.data.target && a.data.target == '∑') {
                return ('alpha=' + a.data.alpha + ', v=' + a.data.v)
              }
              if (a.data.name && a.data.name.indexOf('WL') != -1) {
                return (a.data.name)
              }
            },
          },
          animation: false,
          series: [
            {
              type: 'graph',
              layout: 'none',
              symbolSize: [70, 40],
              symbol: 'rect',
              roam: false,
              label: {
                normal: {
                  show: true,
                },
              },
              edgeSymbol: ['circle', 'arrow'],
              edgeSymbolSize: [4, 10],
              symbolOffset: [15, 0],
              edgeLabel: {
                normal: {
                  textStyle: {
                    fontSize: 20,
                  },
                },
              },
              data: allData,
              links: allLinks,
              lineStyle: {
                normal: {
                  opacity: 0.9,
                  width: 2,
                  curveness: 0,
                  type: 'dotted',
                },
              },
            },
          ],
        }
        myCharts.setOption(option)
        myCharts.on('click', function (param) {
          if (param.data.name && param.data.name.indexOf('WL') != -1) {
            $shelf.showDetail = true
            $shelf.showDetailData = param.data
          }
        })
      },
      closeDetail () {
        const $shelf = this
        $shelf.showDetail = false
      },
      getAnalysisResults () {
        const $shelf = this
        $shelf.$http({
          method: 'post',
          url: 'api/metrics/find',
          data: {
            pageNum: '',
            pageSize: '',
            conditions: {
              startTime: '',
              endTime: '',
              page: 0,
            },
          },
        }).then(function (res) {
          console.log('$shelf.loading',$shelf.loading)
          if($shelf.loading.close){
            $shelf.loading.close()
            $shelf.$message({
              message: '上传成功',
              type: 'success',
            })
          }
          var data = res.data.data, time = data.times.reverse(), f1 = data.f1.reverse(),
            accuracy = data.accuracy.reverse(), loss = data.loss.reverse()
          $shelf.getEchart1('echarts1', time, accuracy)
          $shelf.getEchart1('echarts2', time, loss)
          $shelf.getEchart1('echarts3', time, f1)
          let obj = data.modelParam[0]
          $shelf.resultobj.弱学习器个数 = obj.wl_num
          $shelf.resultobj.负例样本个数 = obj.neg_sample_num
          $shelf.resultobj.power_t = obj.power_t
          $shelf.resultobj.学习率 = obj.learning_rate
          $shelf.resultobj.正例样本个数 = obj.pos_sample_num
          $shelf.resultobj.gamma = obj.gamma
        })
      },
      getEchart1 (id, time, data) {
        let miny = Math.min(...data).toFixed(2)
        const $shelf = this
        var date = []
        $.each(time, function (index, value) {
          date.push(value.replace(' ', '\n'))
        })
        let myCharts = this.$echarts.init(document.getElementById(id))
        var option = {
          backgroundColor: 'white',
          xAxis: {
            type: 'category',
            data: date,
          },
          yAxis: {
            type: 'value',
            min: miny,
          },
          grid: {
            left: '13%',
          },
          series: [
            {
              data: data,
              type: 'line',
              smooth: true,
            }],
        }
        myCharts.setOption(option)
      },
      getModel () {
        const $shelf = this
        $shelf.$http({
          method: 'get',
          url: 'api/features/find?model=-1',
        }).then(function (res) {
          $shelf.getEchart(res.data.data)
        })
      },
      beforeUpload () {
        this.loading = this.$loading({
          lock: true,
          text: '上传中,请稍后',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)',
        })
      },
      uploadError () {
        this.loading.close()
        this.$message({
          message: '上传失败',
          type: 'error',
        })
      },
      uploadSuccess (data) {
        this.implementFile(data.data.fileuri)
      },
      implementFile (file) {
        const $shelf = this
        $shelf.$http({
          method: 'get',
          url: 'api/model/exe?model=a&scriptUrl=' + file,
        }).then(function (res) {
          if (res.data.code = 200) {
            $shelf.getAnalysisResults()
          }
        })
      },

    },
  }
</script>
<style>
  .el-upload-list__item:first-child {
    margin-top: 2px;
  }

  .el-button--primary {
    background-color: #416c97;
    border: #416c97;
  }

  .el-button--primary:hover, .el-button--primary:focus {
    background-color: #5893cd;
    border: #5893cd;
  }

  .el-popover {
    padding: 0px;
  }

  .el-upload-list {
    float: left;
    border: 1px solid #bfbfbf;
    min-width: 300px;
    height: 30px;
    background-color: white;
  }

  .el-upload--text {
    float: right;
    margin-right: 10px;
    margin-bottom: 10px;
  }
</style>
<style scoped>
  .history_d{
    font-size: 15px;
    margin-bottom: 5px;
  }
  table {
    padding: 0;
    margin: 0;
    border-collapse: collapse;
  }

  table tr {
    height: 33px;
    line-height: 33px;
  }

  table td {
    border: 1px solid #bfbfbf;
    width: 150px;
  }

  .modelParameter {
    background-color: rgba(203, 203, 203, 0.4);
    text-align: left;
    padding-left: 8px;
  }

  .detail-content {
    line-height: 25px;
    background-color: #fff;
    padding-left: 10px;
    border-radius: 3px;
  }

  .features {
    max-height: 180px;
    overflow: auto;
  }

  .features > div {
    white-space: nowrap;
  }

  .detail-title {
    height: 30px;
    line-height: 30px;
  }

  .el-icon-caret-right {
    transition: all .3s linear;
  }

  .main-content {
    background: url("../../../images/grid.gif") #fff;
    font-size: 12px;
    overflow-y: auto;
  }

  #echarts {
    /*min-height: 2000px;*/
    /*overflow-y: auto;*/
  }

  .total-info {
    position: fixed;
    top: 60px;
    left: 20px;
    color: #fff;
    background-color: #416c97;
    padding: 6px 0px;
    width: 100px;
    font-size: 12px;
    cursor: pointer;
  }

  .sample {
    position: fixed;
    top: 100px;
    left: 20px;
    width: 100px;
    color: #fff;
    font-size: 12px;
    display: inline-block;
    text-align-last: justify;
    background-color: #76b917;
    padding: 6px 7px 6px 8px;
    cursor: pointer;
  }

  .detail {
    width: 250px;
    height: 300px;
    background-color: #eeeeee;
    position: fixed;
    top: 60px;
    right: 28px;
  }

  .close {
    font-size: 16px;
    padding: 5px;
    color: black;
    float: right;
    cursor: pointer;
  }

  .title {
    height: 35px;
    line-height: 35px;
    font-size: 12px;
  }

  .upload {
    padding-left: 10px;
  }

  .upload-title {
    line-height: 30px;
    color: #416c97;
  }
</style>
