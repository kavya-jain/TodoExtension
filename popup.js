$(function(){

    var newTaskList=[];
    chrome.storage.sync.get('tList', function(todo){
        $('#taskList').text(todo.tList);
    });

    $("#btnSub").click(function(){
        // $("#taskList").text($("#task").val());

        newTaskList.push($("#task").val());
        chrome.storage.sync.set({'tList' : newTaskList});

        chrome.storage.sync.get({'tList' : newTaskList}, function(todo){
            $('#taskList').text(todo.tList);
        });
    });
    $( ".inner" ).append( "<p>Test</p>" );
});



// $(function(){

//     $("#btnSub").click(function(){
//         $("#taskList").text($("#task").val());
//     });
// });