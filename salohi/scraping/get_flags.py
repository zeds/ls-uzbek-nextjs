from bs4 import BeautifulSoup
import requests
import urllib
import os
import time


#wikipedia「国旗の一覧」のurl
# wiki_url = "https://ja.wikipedia.org/wiki/%E5%9B%BD%E6%97%97%E3%81%AE%E4%B8%80%E8%A6%A7"
wiki_url = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"

#htmlソースの取得とパース
html_text = requests.get(wiki_url).text
soup = BeautifulSoup(html_text,"lxml")

#imgタグの取得
imgs = soup.find_all("img")
#国旗画像URLの取得
flag_urls = []

# for tag in imgs:
#    #  #国旗画像のimgタグはalt属性が"〇〇の旗"という形式になっているので（2020年3月22日現在）、"旗"が含まれるものだけ処理する。
#    # if "旗" not in tag.get("alt"):
#    # print(tag.get("alt"))
#    if "static" in tag.get("src"):
#        continue
#    print(tag.get("src"))
#    # if "旗" not in tag.get("alt"):
#    #      continue
#    url = tag.get("src") #src属性（urlの相対パス）を取得
#    url = "https:"+url #https:を先頭につけて絶対URLにする
#    # print(url)
#    flag_urls.append(url)
#    break
# flag_urls.append("https://en.wikipedia.org/wiki/File:Flag_of_Afghanistan_(2013%E2%80%932021).svg")

image_url = "https://https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg/1599px-Flag_of_Afghanistan_%282013%E2%80%932021%29.svg.png"

img_data = requests.get(image_url).content
with open('image_name.jpg', 'wb') as handler:
    handler.write(img_data)

for url in flag_urls:
    #ダウンロード先のパスの指定
    #各URLの末尾は"125px-Flag_of_国名.svg.png"のようになっている。ここから"Flag_of_国名.png"をダウンロード後のファイル名にする
    png_name = url.split("px-")[-1].split(".")[0]+".png"
    #figsというディレクトリの下に保存する。figsは予め作っておく
    png_name = os.path.join("./figs",png_name)
    #ファイルが存在しない場合のみダウンロードする
    if os.path.exists(png_name): 
        print("File",png_name,"already exists")
        continue
    urllib.request.urlretrieve(url,png_name)
    print("File",png_name,"downloaded")
    #サーバに負荷を与えないため待機
    time.sleep(1)
