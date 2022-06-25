//Gọi tới API Back end
fetch('https://gnews.io/api/v4/top-headlines?token=cdfd47fec307ca73bbe8fb98aacfaadd')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    var news = data.articles;
    var tin ="";
    for (var i=0; i< news.length; i++){
        tin += "<div class=\"tin1\">" +
        "<div class=\"anh\">" +
        "<img src=\"" + news[i].image + "\">  </div>" +
        "<div class=\"tieude\">"+
        "<a href=\""+news[i].url+"\" target=\"_blank\">" + news[i].title + "<a/>"+
        "<p>" +news[i].publishedAt + "</p>"+
        "<p>" +news[i].description +"</p>"+
        "</div>"+
        "</div>"
    }
    console.log(data);   
   document.getElementById("main").innerHTML=tin;
});

// click vào biểu tượng tìm tiếm trên header xuất hiện modal
function timKiem(){
    document.getElementById("mau").style= "display: block";
}
// đóng bảng mẫu bằng dấu x
function tatmau(){
    document.getElementById("mau").style= "display: none";  
}
// khi nhập input xong search đóng modal
function search(){
    document.getElementById("mau").style= "display: none";
    // khai báo biến giá trị input tìm kiếm
    var keyWord = document.getElementById("tukhoa").value;
    // gọi tới APi back end bằng từ khóa
    fetch('https://gnews.io/api/v4/search?q='+ keyWord +'&token=cdfd47fec307ca73bbe8fb98aacfaadd')
    .then(function (response) {
return response.json();
    })
    .then(function (data1) {
    var news1 = data1.articles;
    var tinSearch ="";
    for (var i=0; i< news1.length; i++){
        tinSearch += "<div class=\"tin1\">" +
        "<div class=\"anh\">" +
        "<img src=\"" + news1[i].image + "\">  </div>" +
        "<div class=\"tieude\">"+
        "<a href=\""+news1[i].url+"\" target=\"_blank\">" + news1[i].title + "<a/>"+
        "<p>" +news1[i].publishedAt + "</p>"+
        "<p>" +news1[i].description +"</p>"+
        "</div>"+
        "</div>"
    }
    console.log(data1);   
   document.getElementById("main").innerHTML=tinSearch;

});
}




