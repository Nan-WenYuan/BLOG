##　CORNERSTONE开源版本部署记录  
### Docker部署流程：  
#### 1.执行Docker命令  
```bash
curl -sL http://install.cornerstone365.cn/github/script/docker_build_cs_mysql.sh | sudo bash -s 'youMysqlPassword'  
```
#### 2.删除生成的容器  
#### 3.重新生成容器  
```bash
docker run -d --name mysql_5.7 -e MYSQL_ROOT_PASSWORD=123456 -p 33063:3306 mysql:5.7  

docker run -dit --name cornerstone_72 --link mysql_5.7  -p 8811:8888 -e TZ="Asia/Shanghai" -e JAZMIN_DB_USER=root -e JAZMIN_DB_PWD=123456 -e JAZMIN_DB_HOST=mysql_5.7 -e JAZMIN_DB_PORT=3306 cornerstone:72  
```
#### 4.部署数据库  
#### 5.进入容器<cornerstone_72> CLI  
```bash
#执行命令：
yum install net-tools
./restartall.sh
```
#### 6.容器自启动
```bash
#开启容器自启动:
docker update --restart=always mysql_5.7
docker update --restart=always cornerstone_72
#关闭容器自启动:
docker update --restart=no [容器名]
```
#### 7.**`License授权`**
```text
N2H1SNrm2EkjU3f6nw1kGpFZOKI2RYK69mQ8YeCRggbZHK42IJkDLym5AZSiveoAFDQXQoo457AyyUNTNJHmZLZOIFpwp2kNJTFOzwnaZQjrx4T1NKwq3uFsRV5Lr5gLbviwGDmZ6cbf0TawUtWiGBQC3JALO8Mdk9k0ky4Qak0dZjQ4DOM3EF1hfkZOAaaI9IC43SoPaiYAWRZs2gPXDlYBJ3kmDwUjOWTLsh6UBo4x2zMRU95FXTRAOtETxxeMovqOAUJCDCV00rPF9J6MAtzc6LpVxmUV9Znwes016B7eL1IblJr4yTMiGOFmvfERcHXFzCz137WMQH9WGKVXQs3fJKUHZDphvrcbbXGdRVlYPQeRSbgqwvH02FyCVacvi7t3BrRzEDqQMXtDRdmUmqvsJRvvP6ZiuIj2nJVq95gFclBXMNBs4KUhUbClXv1Fp8uXzEAeoTaRHzkysDc53A3lOPR4WAzP0cTlTyDF3yCzramxzjJjHL7XGAYqeSjJqgAcem4z0cw6uU2nJMMoTcstkjZg6nUyIHCYUE9GDf9IxqE7GfqRrlZM0Pji069pKQZFSqOEHGI7hRq1rRVxFGNcAa6DmbsvVtx1CjZ7QwjPEgRXvtlJLFiM5ufZXwK9tHDZ8k19LKTJ2MwwSAjz3l29k035H4uRB6jMXRa8F7DNsauu
```
