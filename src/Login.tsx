function Login(){
return (
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login & Register</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: #f4f6f9;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .container {
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
            padding: 30px;
        }

        .tabs {
            display: flex;
            justify-content: space-around;
            margin-bottom: 25px;
            border-bottom: 2px solid #eef2f5;
        }

        .tab-btn {
            background: none;
            border: none;
            font-size: 16px;
            font-weight: 600;
            color: #888888;
            padding: 10px 20px;
            cursor: pointer;
            transition: color 0.3s, border-bottom 0.3s;
            margin-bottom: -2px;
        }

        .tab-btn.active {
            color: #007bff;
            border-bottom: 2px solid #007bff;
        }

        .form-panel {
            display: none;
        }

        .form-panel.active {
            display: block;
        }

        .form-group {
            margin-bottom: 18px;
        }

        label {
            display: block;
            margin-bottom: 6px;
            font-size: 14px;
            font-weight: 500;
            color: #333333;
        }

        input {
            width: 100%;
            padding: 10px 12px;
            border: 1px solid #cccccc;
            border-radius: 4px;
            font-size: 14px;
            outline: none;
            transition: border-color 0.3s;
        }

        input:focus {
            border-color: #007bff;
        }

        .btn {
            width: 100%;
            padding: 12px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.3s;
            margin-top: 10px;
        }

        .btn:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>

<div class="container">
    <!-- Tab Controls -->
    <div class="tabs">
        <button class="tab-btn active" onclick="switchForm('login')">Login</button>
        <button class="tab-btn" onclick="switchForm('register')">Register</button>
    </div>

    <!-- Login Form -->
    <div id="login-panel" class="form-panel active">
        <form action="/login-endpoint" method="POST">
            <div class="form-group">
                <label for="login-email">Email Address</label>
                <input type="email" id="login-email" name="email" required autocomplete="username">
            </div>
            <div class="form-group">
                <label for="login-password">Password</label>
                <input type="password" id="login-password" name="password" required autocomplete="current-password">
            </div>
            <button type="submit" class="btn">Sign In</button>
        </form>
    </div>

    <!-- Register Form -->
    <div id="register-panel" class="form-panel">
        <form action="/register-endpoint" method="POST">
            <div class="form-group">
                <label for="reg-name">Full Name</label>
                <input type="text" id="reg-name" name="name" required autocomplete="name">
            </div>
            <div class="form-group">
                <label for="reg-email">Email Address</label>
                <input type="email" id="reg-email" name="email" required autocomplete="email">
            </div>
            <div class="form-group">
                <label for="reg-password">Password</label>
                <input type="password" id="reg-password" name="password" required autocomplete="new-password">
            </div>
            <button type="submit" class="btn">Create Account</button>
        </form>
    </div>
</div>

<script>
    function switchForm(formType) {
        // Hide all panels and remove active tab styles
        document.querySelectorAll('.form-panel').forEach(panel => panel.classList.remove('active'));
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

        // Activate selected tab and panel
        if (formType === 'login') {
            document.getElementById('login-panel').classList.add('active');
            event.currentTarget.classList.add('active');
        } else {
            document.getElementById('register-panel').classList.add('active');
            event.currentTarget.classList.add('active');
        }
    }
</script>

</body>
</html>
)

}
export default Login