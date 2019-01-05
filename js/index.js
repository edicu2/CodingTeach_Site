var Body = {
    template: `<section class="container-fluid">
<div class="jumbotron">
<h1 class="text-center">CODING COACH</h1>
<p class="text-center">to the coco</p>
</div>
</section>

`
};
var mainsection = {
    template: `<section class="container-fluid">
<div class="jumbotron"> </div>
</section>
`
};
var mainarticle = {
    template: `<article class="row">
<div class="col-md-1 col-md-offset-1"></div>
<div class="col-md-3">
<h4>COCO 개발자</h4>
<p>.....</p>
<p><a class="btn btn-default" data-target="#myModal" data-toggle="modal">자세히 알아보기 </a></p>
</div>
<div class="col-md-3">
<h4>COCO 설립계기</h4>
<p>.....</p>
<p><a class="btn btn-default" data-target="#myModal" data-toggle="modal">자세히 알아보기 </a></p>
</div>
<div class="col-md-3">
<h4>COCO 과정</h4>
<p>.....</p>
<p><a class="btn btn-default" data-target="#myModal" data-toggle="modal">자세히 알아보기 </a></p>
</div>
</article>
`
}
var loginForm = {
    template: ` <div class="login">
<div class="container">
<div class="col-lg-6 col-lg-offset-3">
<!--col-lg-6을 3컬럼만큼 이동시킵니다-->
<h1 class="horizontal" style="color: white; text-align: center">LOGIN</h1>
<div class="inner-form">
<ul class="nav nav-tabs">
<li class="active"><a href="#tab1" data-toggle="tab">STUDENT</a></li>
<li><a href="#tab2" data-toggle="tab">TEACHER</a></li>
</ul>
<div class="tab-content">
<div class="tab-pane active in fade" id="tab1">
<div class="panel-group">
<form role="form" action="login.php" method="post">
<div class="row">
<div class="col-lg-12">
<label>ID</label>
<div class="form-group">
<input type="text" name="userID" id="userID" class="form-control" placeholder=""> </div>
</div>
<div class="col-lg-12">
<label>Password</label>
<div class="form-group">
<input type="password" name="userPwd" id="userPwd" class="form-control" placeholder=""> </div>
</div>
<div class="col-lg-12">
<button type="submit" id="clickbtn" class="btn btn-danger" onclick="check1()"> <span>LOGIN</span> </button>
</div>
<div class="col-lg-12">
<div class="forgot">
<p><a href="#">Forgot Password ?</a></p>
</div>
</div>
</div>
</form>
</div>
</div>
<div class="tab-pane fade" id="tab2">
<div class="panel-group">
<form role="form" action = "login.php" method="post">
<div class="row">
<div class="col-lg-12">
<label>ID</label>
<div class="form-group">
<input type="text" name="teacherID" id="teacherID" class="form-control" placeholder=""> </div>
</div>
<div class="col-lg-12">
<label>Password</label>
<div class="form-group">
<input type="password" name="teacherPwd" id="teacherPwd" class="form-control" placeholder=""> </div>
</div>
<div class="col-lg-12">
<button type="submit" class="btn btn-danger" onclick="checkl()"> <span>LOGIN</span> </button>
</div>
<div class="col-lg-12">
<div class="forgot">
<p><a href="#">Forgot Password ?</a></p>
</div>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
`
};


var registerForm = {
    template: `<div class="signup">
<div class="container">
<h1 style="text-align: center; color: white">SIGN IN</h1>
<br>
<div class="col-lg-6 col-lg-offset-2">
<div class="row">
<div class="col-md-12">
<form action="register.php" method="post" class="signform">
<div class="col form-group">
<label for="userID">ID</label>
<input id="userID" name="userID" type="text" class="form-control" placeholder=""> </div>
<label for="userPwd">Password</label>
<input id="userPwd" name="userPwd" type="password" class="form-control" placeholder="">
<label for="userPwd2">Password check</label>
<input id="userPwd2" name="userPwd2" type="password" class="form-control" placeholder="">
<label for="userName">NAME</label>
<input id="userName" name="userName" type="text" placeholder="5자미만 공백없이" class="form-control">
<div class="form-group">
<label for="email">E-mail</label>
<input id="userEmail" name="userEmail" type="email" placeholder="abcd@domain.com" class="form-control"> </div>
<div class="form-group">
<label class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="userGender" value="male"> <span class="form-check-label"> Male </span> </label>
<label class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="userGender" value="Female"> <span class="form-check-label"> Female</span> </label>
</div>
<div class="form-group">
<label for="tel">Phone</label>
<input type="text" name="tel" id="tel" class="form-control"> </div>
<div class="form-group">
<label for="language">language</label>
<select name="language">
<option value="Not">---</option>
<option value="l1">Java</option>
<option value="l2">JavaScript</option>
<option value="l3">Python</option>
<option value="l4">C#</option>
<option value="l5">C</option>
</select>
</div>
<div class="form-group">
<label for="Level">Level</label>
<input name="Level" type="radio" value="good">Good
<input name="Level" type="radio" value="soso">soso
<input name="Level" type="radio" value="bad">Bad </div>
<div class="form-group">
<button type="submit"  class="btn btn-primary btn-block">REGISTER</button>
</div>
<div class="border-top card-body text-center">Have an account? <a href="loginForm.html">Log In</a></div>
</form>
</div>
</div>
</div>
</div>
</div>`
};
var downloadForm = {
    template: `
<div class="download">
<div class="container">
<div class="down">
<div class="loadEl">
<h2>COMPILER DOWNLOAD</h2>
<p>- 각종언어를 컴파일하기 위해 설치해야합니다</p>
</div>
<a href="images/나나세.jpg" download>
<button type="submit" class="btn btn-info"> <span>download</span> </button>
</a>
<br/>
<br/>
<br/>
<hr/>
<br/>
<br/>
<div class="impormationform">
<div class="downloadnav">
<ul class="nav nav-tabs">
<li class="active"><a href="#tab1" data-toggle="tab">STUDENT</a></li>
<li><a href="#tab2" data-toggle="tab">TEACHER</a></li>
</ul>
<div class="tab-content">
<div class="tab-pane active in fade" id="tab1">
<div class="panel-group">
<br/>
<p>학생용 설명</p>
<p>학생용 설명</p>
<p>학생용 설명</p>
<p>학생용 설명</p>
<p>학생용 설명</p>
<p>학생용 설명</p>
<p>학생용 설명</p>
<p>학생용 설명</p>
<p>학생용 설명</p>
<p>학생용 설명</p>
<p>학생용 설명</p>
<p>학생용 설명</p>
<p>학생용 설명</p>
<p>학생용 설명</p>
<p>학생용 설명</p>
<p>학생용 설명</p>
</div>
</div>
<div class="tab-pane fade" id="tab2">
<div class="panel-group">
<br/>
<p>선생용 설명</p>
<p>선생용 설명</p>
<p>선생용 설명</p>
<p>선생용 설명</p>
<p>선생용 설명</p>
<p>선생용 설명</p>
<p>선생용 설명</p>
<p>선생용 설명</p>
<p>선생용 설명</p>
<p>선생용 설명</p>
<p>선생용 설명</p>
<p>선생용 설명</p>
<p>선생용 설명</p>
<p>선생용 설명</p>
<p>선생용 설명</p>
<p>선생용 설명</p>
<p>선생용 설명</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>`
};
