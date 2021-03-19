<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="login.css">
    <title>Log In</title>
</head>

<body>
    <div class="login">
        <img class="login__logo" src="" alt="">
        <div class="login__container">
            <h1>Sign-in</h1>
            <form action="login_handler.php" method="post">
                <h5>E-mail</h5>
                <input type="email" name="email" />

                <h5>Password</h5>
                <input type="password" name="password" />

                <button class="login__signInButton">Sign In</button>
            </form>
            <p>By singing-in you agree to G conditions of Use & Sale. Plesae see our Privacy Notice, our Condtions
                and our Interests-based Ads Notice.
            </p>

            <a href="registration.php"><button class="login__registerButton">Create your own G accout.</button></a>
        </div>
    </div>
</body>

</html>