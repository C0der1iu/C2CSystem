webpackJsonp([8],{"9pfa":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("J70x"),a=i("uAC3"),l=i.n(a),s={data:function(){return{nowMeetingId:void 0,list:null,listLoading:!1,dialogFormVisible:!1,dialogStatus:"create",textMap:{update:"Edit",create:"添加终端"},addTerminalInfo:{terminalId:"",terminalSequence:1},listQuery:{},multipleSelection:[]}},filters:{statusFilter:function(e){return{true:"success",false:"danger"}[e]},inMeetingFilter:function(e){return{true:"是",false:"否"}[e]}},created:function(){this.nowMeetingId=l.a.get("meetingId"),this.nowMeetingId||(this.$message.warning("请先创建会议！"),this.nowMeetingId=-1),this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,Object(n.c)(this.nowMeetingId).then(function(t){e.list=t.data,e.listLoading=!1})},handleCreate:function(){this.dialogFormVisible=!0},handleUpdate:function(){this.dialogStatus="Edit",this.dialogFormVisible=!0},createData:function(){var e=this;Object(n.a)(this.addTerminalInfo).then(function(t){t.success?(e.dialogFormVisible=!1,e.$message.success(t.message),e.fetchData()):e.$message.error(t.message)})},updateData:function(){alert("Update")},freshList:function(){this.fetchData()},handleExchangeMeeting:function(){var e=this;if(-1!=this.nowMeetingId){for(var t=[],i=[],a=0;a<this.multipleSelection.length;a++){var l=this.multipleSelection[a];l.is_in_meeting||t.push(l.terminal_id),i.push(l.terminal_id)}for(var s=0;s<this.list.length;s++){var r=this.list[s];i.indexOf(r.terminal_id)<0&&r.is_in_meeting&&t.push(r.terminal_id)}Object(n.b)(this.nowMeetingId,t).then(function(t){t.success?(e.$message.success(t.message),e.fetchData()):e.$message.error(t.message)})}else this.$message.warning("请先创建会议")},handleSelectionChange:function(e,t){this.multipleSelection=e}}},r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-tag",[e._v("终端管理")]),e._v(" "),i("div",{staticClass:"filter-container"},[i("el-button",{attrs:{type:"primary",icon:"el-icon-refresh"},on:{click:e.freshList}},[e._v("刷新列表")]),e._v(" "),i("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus"},on:{click:e.handleCreate}},[e._v("添加终端")]),e._v(" "),i("el-button",{attrs:{type:"danger",icon:"el-icon-delete"}},[e._v("删除终端")]),e._v(" "),i("el-button",{attrs:{type:"primary",icon:"el-icon-sort"},on:{click:e.handleExchangeMeeting}},[e._v("参会反转")])],1),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"Loading","default-sort":{prop:"terminalid",order:"descending"},border:"",fit:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),i("el-table-column",{attrs:{sortable:"",prop:"terminalid",align:"center",label:"终端序号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.terminal_sequence)+"\n      ")]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"终端号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.terminal_id)+"\n      ")]}}])}),e._v(" "),i("el-table-column",{attrs:{"class-name":"status-col",label:"能否与会",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-tag",{attrs:{type:e._f("statusFilter")(t.row.is_in_meeting)}},[e._v(e._s(e._f("inMeetingFilter")(t.row.is_in_meeting)))])]}}])}),e._v(" "),i("el-table-column",{attrs:{"class-name":"status-col",label:"终端状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-tag",{attrs:{type:e._f("statusFilter")(t.row.status)}},[e._v(e._s(t.row.terminal_status))])]}}])})],1),e._v(" "),i("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{staticStyle:{width:"400px","margin-left":"50px"},attrs:{"label-position":"left","label-width":"70px"}},[i("el-form-item",{attrs:{label:"序列号"}},[i("el-input",{model:{value:e.addTerminalInfo.terminalId,callback:function(t){e.$set(e.addTerminalInfo,"terminalId",t)},expression:"addTerminalInfo.terminalId"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"设备序号"}},[i("el-input-number",{attrs:{"controls-position":"right",min:1},model:{value:e.addTerminalInfo.terminalSequence,callback:function(t){e.$set(e.addTerminalInfo,"terminalSequence",t)},expression:"addTerminalInfo.terminalSequence"}})],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),e._v(" "),"create"==e.dialogStatus?i("el-button",{attrs:{type:"primary"},on:{click:e.createData}},[e._v("确认")]):i("el-button",{attrs:{type:"primary"},on:{click:e.updateData}},[e._v("更新")])],1)],1)],1)},staticRenderFns:[]},o=i("/Xao")(s,r,!1,null,null,null);t.default=o.exports}});