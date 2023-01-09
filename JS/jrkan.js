var rule = {
    title:'JRKAN直播',
    host:'http://m.jrkan2023.com',
	// JRKAN备用域名:m.jrskan8.com / m.jrkan666.com / jryyds.com / jrsbxj.com
	// JRKAN网址发布:qiumi1314.com
    url:'/fyclass',
    searchUrl:'',
    searchable:0,
    quickSearch:0,
    class_name:'球赛直播',
    class_url:'/',
    //class_url:'?live',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:'',
    limit:6,
    double:false,
    timeout:5000,
    play_parse:true,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
    一级:'.row a;li div:gt(2):lt(6)&&Text;img&&src;.match-start-time&&Text;a&&href',
    二级:{title:'.live-title&&Text;.live-title&&Text',img:'img:eq(1)&&src',desc:';;;.live-left-team-sj&&Text;.live-right-team-sj&&Text',content:'.live-info&&Text',tabs:'',tab_text:'',lists:'#item-source a',list_text:'a&&Text',list_url:'a&&data-url'},
    搜索:'',
}
