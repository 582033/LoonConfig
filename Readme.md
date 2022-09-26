
### Loon配置使用

1. 复制配置文件路径:
```
https://raw.githubusercontent.com/582033/LoonConfig/main/LoonConfig.yaml
```
推荐使用下面的加速地址，
```
https://raw.fastgit.org/582033/LoonConfig/main/LoonConfig.yaml
```
2. 在配置中选择`从URL下载`:

[](https://raw.githubusercontent.com/582033/LoonConfig/main/sta/conf1.jpg)

3.填写你的订阅链接

[](https://raw.githubusercontent.com/582033/LoonConfig/main/sta/conf2.jpg)


---

### 自建节点转订阅
* 在线`Subscription Converter`平台;推荐下[https://sub.xeton.dev/](https://sub.xeton.dev/)

* 以自建Trojan节点为例:
```
	#每行一个;例: trojan://foobar@yjiang.cn:443?peer=#yjiang
	trojan://{password}@{host}:{port}?peer=#{alias}
```

* 填写如图:
[](https://raw.githubusercontent.com/582033/LoonConfig/main/sta/example.png)

### 注意事项:
* 需要勾选`输出为Node List`选项
* 更多选项中，需要根据情况是否勾选`跳过证书验证`
