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
            <h1>Sign-up</h1>
            <form action="registration_handler.php" method="post">
                <h5>E-mail</h5>
                <input type="email" name="email" />

                <h5>Password</h5>
                <input type="password" name="password1" />

                <h5>Retype Password</h5>
                <input type="password" name="password2" />

                <button class="login__signInButton" name="submit">Sign In</button>
            </form>
            <p>By singing-in you agree to G conditions of Use & Sale. Plesae see our Privacy Notice, our Condtions
                and our Interests-based Ads Notice.
            </p>

            <a href="login.php"><button class="login__registerButton">Login here</button></a>
        </div>
    </div>
</body>

</html>