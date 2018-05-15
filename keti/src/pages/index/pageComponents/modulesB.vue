<template>
  <div class="main-content" id="main-content">
    <div id="echarts"></div>
    <el-dialog
      :visible.sync="showDetail"
      width="90%">
      <div class="detail" >
      </div>
      <span slot="footer" class="dialog-footer">
          <!--<el-button @click="showDetail = false">取 消</el-button>-->
          <el-button type="primary" @click="showDetail = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-upload
      class="upload-demo upload-file"
      action="../topicSstc/api/files/singleUpload"
      :data="{type:'other'}"
      :before-upload="beforeUpload"
      :on-success="uploadSuccess"
      :on-error="uploadError"
      :limit="1"
      :file-list="fileList">
      <el-button size="small" type="primary" style="height: 0px;width: 0px;padding: 0px" id="upload">上传文件</el-button>
    </el-upload>
  </div>
</template>

<script>
  import $ from 'jquery'
  import '../../../../static/d3'

  export default {
    data() {
      return {
        fullscreenLoading: false,
        showTotal: false,
        showDetail: false,
        showDetailData: {},
        uploadType: 'first',
        fileList: [],
        loading: '',
        windowWidth: 0,
        data:[]
      }
    },
    created() {
      this.windowWidth = $(window).width()

    },
    mounted() {
      let domechart = document.querySelector('#echarts')
      domechart.style.height = window.innerWidth * 7 + 500 + 'px';
      this.getData(0,this.data)
      $('.main-content').css('height', ($(window).height() - 50) + 'px')
      $(window).resize(function () {
        $('.main-content').css('height', ($(window).height() - 50) + 'px')
      })
      this.getId()
      var a=[
        {
          name:'aaa',
          chidren:[
            {
              name:'bbb',
              chidren:[]
            },
            {
              name:'ccc',
              chidren:[]
            },
          ]
        }
      ]
    },
    methods: {
      getId(){
        const $shelf = this
        // this.loading = this.$loading({
        //   lock: true,
        //   text: '图形初始化...',
        //   spinner: 'el-icon-loading',
        //   background: 'rgba(0, 0, 0, 0.7)'
        // })
        $shelf.$http({
          method: 'get',
          url: "api/apt/count",
        }).then(function (res) {
          // $shelf.loading.close()
          if(res.data.data){
            $shelf.getEchart(res.data.data)
          }
        })
      },
      gerD3Tree(data){
        var width = 1300,
          height = 600;

        //定义数据转换函数
        var tree = d3.layout.tree()
          .size([width, height - 200])
        //定义对角线生成器diagonal
        var diagonal = d3.svg.diagonal()
          .projection(function (d) {
            return [d.x, (d.y + 50)]
          })

        //定义svg
        d3.select(".detail svg").remove()
        var svg = d3.select(".detail").append("svg")
          .attr("width", width)
          .attr("height", height)
          .append("g")
          .attr("transform", "translate(40,0)")

          var nodes = tree.nodes(data);
          var links = tree.links(nodes);

          //画点
          var node = svg.selectAll(".node")
            .data(nodes)
            .enter()
            .append("g")
            .attr("class", "node")
            .attr("transform", function (d) {
              return "translate(" + d.x + "," + (d.y + 50) + ")"
            })
          //加圈圈
          node.append("circle")
            .attr("r", 4.5)
          //加文字
          node.append("text")
            .attr("dx", function (d,index) {
              if(index==0){
                return 65
              }
              return 0;
            })
            .attr("dy", function (d,index) {
              if(index==0){
                return -10
              }
              return 0;
            })
            .style("text-anchor", function (d) {
              return d.children ? "end" : "start"
            })
            .style('writing-mode', function (d,index) {
              if(index==0){
                return 'lr-tb'
              }
              return 'vertical-lr'
            })
            .text(function (d) {
              return d.name
            })

          //画线
          var line = svg.selectAll("link")
            .data(links)
            .enter()
            .append("g")
            .attr("class", "link")
          line.append("path")
            .attr("class", "linkStyle")
            .attr("d", diagonal)
          line.append('text')
            .attr("dx", function (d) {
              return (d.source.x + d.target.x) / 2
            })
            .attr("dy", function (d) {
              return (d.source.y + d.target.y) / 2 +50
            })

            .attr('class', 'pathText')
            .text(function (d) {
              var text
              if(d.source.left_Node==d.target.name){
                text=d.source.left_edge
              }else if(d.source.rightNode==d.target.name){
                text=d.source.right_edge
              }
              return text
            })

      },
      getTreeData(id){
        const $shelf = this
        $shelf.$http({
          method: 'get',
          url: "api/apt/tree?treeId="+id,
        }).then(function (res) {
          $shelf.gerD3Tree(res.data.data[0])
        })
      },
      getEchart(data,attr) {
        console.log('attr',attr)
        console.log('attrdata',data)
        const $shelf = this

        let myCharts = $shelf.$echarts.init(document.getElementById('echarts'));
        var allData = [], allLinks = [], yOffset = 4000 / ($shelf.windowWidth - 200 - 17), leng = data.length/2
        for (let n = 0; n < leng; n++) {
          allData.push({
            name: 'X' + n,
            x: 0,
            y: 8 * n,
            type: 'c',
            tree_id:data[2*n].tree_id,
            symbolSize: [40, 70],
            symbol: 'rect',
            symbolOffset: [0, 0],
            itemStyle: {
              normal: {
                color: '#6bb9f0'
              }
            }
          })
          allData.push({
            name: 'Y' + n,
            x: yOffset,
            y: 8 * n,
            type: 'c',
            tree_id:data[2*n+1].tree_id,
            symbolSize: [40, 70],
            symbol: 'rect',
            symbolOffset: [0, 0],
            itemStyle: {
              normal: {
                color: '#cae2f3'
              }
            },
            label: {
              normal: {
                color: '#6bb9f0'
              }
            }
          })
          allData.push({
            name: '基(弱)模型' + n,
            x: 25,
            y: 8 * n,
            symbolSize: [80, 50],
            symbol: 'roundRect',
            symbolOffset: [10, 0],
            itemStyle: {
              normal: {
                color: '#b9b9b9'
              }
            },
            label: {
              normal: {
                color: '#5b5b5b'
              }
            }

          })
          allData.push({
            name: 'S'+n,
            x: 50,
            y: 8 * n,
            symbolSize: [40, 40],
            symbol: 'triangle',
            symbolRotate: -90,
            symbolOffset: [-10, 0],
            itemStyle: {
              normal: {
                color: '#949494'
              }
            }
          })
          if(attr){
            allData.push({
              name: data[n].tree_predict_result,
              x: 75,
              y: 8 * n,
              symbolSize: [40, 100],
              symbol: 'rect',
              symbolRotate: -90,
              symbolOffset: [10, 0],
              itemStyle: {
                normal: {
                  color: '#fcf2a1'
                }
              },
              label: {
                normal: {
                  color: '#bc8314'
                }
              }
            })
            allLinks.push({
              source: 'Y' + n,
              target:  '基(弱)模型' + n
            })
            allLinks.push({
              source: '基(弱)模型' + n,
              target:  'S'+n
            })
            allLinks.push({
              source: 'S'+n,
              target:  data[n].tree_predict_result,
            })
            allLinks.push({
              source: data[n].tree_predict_result,
              target:  attr.tree_predict_result,
            })
          }else{
            allData.push({
              name: '结果' + n,
              x: 75,
              y: 8 * n,
              symbolSize: [40, 70],
              symbol: 'rect',
              symbolRotate: -90,
              symbolOffset: [10, 0],
              itemStyle: {
                normal: {
                  color: '#fcf2a1'
                }
              },
              label: {
                normal: {
                  color: '#bc8314'
                }
              }
            })
            allLinks.push({
              source: 'Y' + n,
              target:  '基(弱)模型' + n
            })
            allLinks.push({
              source: '基(弱)模型' + n,
              target:  'S'+n
            })
            allLinks.push({
              source: 'S'+n,
              target:  '结果' + n,
            })
            allLinks.push({
              source: '结果' + n,
              target:  '综合结果',
            })
          }
          if(n<leng-1){
            allLinks.push({
              source: 'X' + n,
              target:  'X' + (n+1),
              label:{
                normal:{
                  show:true,
                  fontSize:12,
                  align: 'left',
                  formatter:function (a) {
                    return '连接'
                  }
                }

              },
              lineStyle:{
                normal:{
                  color:'#6bb9f0',
                  type:'solid'
                },

              }
            })
            allLinks.push({
              source: 'Y' + n,
              target:  'Y' + (n+1),
              label:{
                normal:{
                  color:'#6bb9f0',
                  show:true,
                  fontSize:12,
                  align: 'left',
                  formatter:function (a) {
                    return '连接'
                  }
                }

              },
              lineStyle:{
                normal:{
                  color:'#cae2f3',
                  type:'solid'
                },

              }
            })
          }
        }
       if(attr){
         allData.push({
           name: attr.tree_predict_result,
           x: 100,
           y: (leng / 2 - 0.5) * 8,
           symbolSize: [70, 40],
           symbol: 'react',
           symbolOffset: [10, 0],
           itemStyle: {
             normal: {
               color: '#6bb9f0'
             }
           }
         })
       }else{
         allData.push({
           name: '综合结果',
           x: 100,
           y: (leng / 2 - 0.5) * 8,
           symbolSize: [70, 40],
           symbol: 'react',
           symbolOffset: [10, 0],
           itemStyle: {
             normal: {
               color: '#6bb9f0'
             }
           }
         })
       }

        allLinks.push({
          source: 'S' + 0,
          target:  '点击上传文件',
          lineStyle: {
            normal: {
              color: '#c60000',
            },
          }
        })
        allData.push({
          name: '点击上传文件',
          type:'upload',
          x: 50,
          y: leng  * 8,
          symbolSize: [90, 40],
          symbol: 'react',
          symbolOffset: [0, 0],
          itemStyle: {
            normal: {
              color: '#c60000'
            }
          }
        })
        var option = {
          roam: false,
          title: {
            text: ''
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
              left: '100',
              width: $shelf.windowWidth - 200,
              roam: false,
              edgeSymbol: ['' , 'arrow'],
              label: {
                normal: {
                  show: true
                }
              },
              edgeLabel: {
                normal: {
                  textStyle: {
                    fontSize: 20,
                  }
                }
              },
              symbolOffset: [0, 0],
              data: allData,
              links: allLinks,
              lineStyle: {
                normal: {
                  opacity: 0.9,
                  width: 2,
                  curveness: 0,
                  type: 'solid'
                }
              }
            }
          ]
        };
        myCharts.setOption(option);
        myCharts.on("click", function (param) {
          if (param.data.type && param.data.type == 'c') {
            $shelf.showDetail = true
            $shelf.getTreeData(param.data.tree_id)
          }
          if(param.data.type && param.data.type == 'upload'){
            $('#upload').click()
          }
        });
      },
      getTreeEchart() {
        const $shelf = this
        let myCharts = $shelf.$echarts.init(document.getElementById('detail'));
        myCharts.showLoading();
        var option = {
          roam: false,
          title: {
            text: ''
          },
          tooltip: {
            formatter: function (a) {
             console.log(a)
            },
          },
          animation: true,
          series: [
            {
              type: 'tree',

              data: $shelf.data,

              left: '2%',
              right: '2%',
              top: '8%',
              bottom: '20%',

              symbol: 'emptyCircle',

              // layout: 'radial',


              orient: 'vertical',

              expandAndCollapse: true,
              initialTreeDepth:7,

              label: {
                normal: {
                  position: 'top',
                  rotate: -90,
                  verticalAlign: 'middle',
                  align: 'right',
                  fontSize: 9
                }
              },

              leaves: {
                label: {
                  normal: {
                    position: 'bottom',
                    rotate: -90,
                    verticalAlign: 'middle',
                    align: 'left'
                  }
                }
              },

              animationDurationUpdate: 500
            }
          ]
        };
        myCharts.on("click", function (param) {
         console.log(1111)
        });
        myCharts.hideLoading();
        myCharts.setOption(option);
      },
      getData(index, data) {
        if (index < 8) {
          if(index==0){
            data.push(
              {
                name: '开始',
                children: []
              },
            )
            this.getData(index + 1, data[0].children)
          }else {
            for (let a=0;a<2;a++){
              data.push(
                {
                  name: index,
                  children: []
                },
              )
              this.getData(index + 1, data[a].children)
            }
          }
        }
      },
      beforeUpload() {
        this.loading = this.$loading({
          lock: true,
          text: '上传中请稍后',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
      },
      uploadError() {
        this.loading.close()
        this.$message({
          message: '上传失败',
          type: 'error'
        });
      },
      uploadSuccess(data) {
        this.$http({
          url: '/api/apt/result',
          method: 'get'
        }).then((res)=>{
          this.loading.close()
          let arr1 = res.data.data.shift()
          this.getEchart(res.data.data,arr1)
          this.$message({
            message: '上传成功',
            type: 'success'
          });

        })

      }
    }
  }
</script>
<style>
  .main-content .el-dialog__body{
      padding: 0;
   }
  .upload-file{
    opacity: 0;
    height: 0;
    width: 0px;
    position: fixed;
    top:50px;
    left: -50px;
  }
  .node circle {
    fill: #fff;
    stroke: steelblue;
    stroke-width: 1.5px;
  }

  .node {
    font: 12px sans-serif;
    cursor: default;
  }

  .linkStyle {
    fill: none;
    stroke: #ccc;
  }

  .pathText {
    font-size: 12px;
    cursor: default;
  }
</style>
<style scoped lang="less">

  #echarts {
    width: 100%;
  }

  .main-content {
    background: url("../../../images/grid.gif") #fff;
    font-size: 12px;
    overflow-y: auto;
  }
</style>
