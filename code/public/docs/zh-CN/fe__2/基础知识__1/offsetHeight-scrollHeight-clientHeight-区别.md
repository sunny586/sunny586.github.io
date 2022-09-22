# offsetHeight scrollHeight clientHeight 区别

## 盒子模型

- width height
- padding
- border
- margin
- **box-sizing**

## offsetHeight offsetWidth

包括：border + padding + content

## clientHeight clientWidth

包括：padding + content

## scrollHeight scrollWidth

包括：padding + 实际内容的尺寸

## scrollTop scrollLeft

DOM 内部元素滚动的距离

## 答案

- offsetHeight - border + padding + content
- clientHeight - padding + content
- scrollHeight - padding + 实际内容的高度

---

代码参考 
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>offsetHeight</title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }

        body {
            background-color: #f1f1f1;
        }

        #container {
            width: 300px;
            height: 200px;
            padding: 20px;
            margin: 30px;
            border: 5px solid #ccc;
            box-sizing: border-box;
            overflow: auto;
            background-color: #fff;
        }
        #content {
            width: 600px;
            height: 500px;
            background-color: #f1f1f1;
            display: inline-block;
        }
    </style>
</head>
<body>
    <p>offsetHeight</p>

    <div id="container">
        <div id="content">
            <p>offsetHeight scrollHeight clientHeight 区别</p>
        </div>
    </div>

    <script>
        const container = document.getElementById('container')
        console.log('offsetHeight', container.offsetHeight)
        console.log('offsetWidth', container.offsetWidth)
        console.log('clientWidth', container.clientWidth)
        console.log('clientHeight', container.clientHeight)
        console.log('scrollWidth', container.scrollWidth)
        console.log('scrollHeight', container.scrollHeight)

        // scrollTop scrollLeft 需滚动之后获取
    </script>
</body>
</html>
```
