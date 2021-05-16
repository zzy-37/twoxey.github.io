---
layout: home

title: 文件要求（项目名称）
name: 张三（姓名）
major: 工业设计（专业）
category : 智慧生活（分类）

---

## 项目介绍（纯文本）

在此处填写项目的介绍文字，使用纯文本编辑器进行编辑

（不要用 MS Office Word 等软件直接编辑，可以在编辑完成后将文本粘贴至`记事本`，`VS Studio Code`等纯文本编辑器之后再保存）

将一段介绍文字填写至此处即可，每个段落之间用一个空行隔开。

使用`utf-8`编码保存文件

**以上段落渲染页面如下**

![]()

想要尝试更复杂的版式的话，可以根据markdown文件格式自行尝试排版。

**以下是一些常用markdown格式参考**

### 使用`井号（#）`创建标题

使用二至六个井号跟上一个空格可以创建二级至六级标题：

## 这是二级标题

### 这是三级标题

#### 这是四级标题

##### 这是五级标题

###### 这是六级标题

> 注意：请不要在页面内部创建一级标题

### 使用`减号（-）`创建无序列表

- 输入`-``加上一个空格可以创建无序列表项
- 这是第二项
- 这是第三项
  - 在项目前添加两个空格的缩进可以对列表进行嵌套
  - 这是嵌套第二项
  - 第三项
    - 三级嵌套
- 这是第四项

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.


Jekyll requires blog post files to be named according to the following format:

`YEAR-MONTH-DAY-title.MARKUP`

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

![try](01.jpg)

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
