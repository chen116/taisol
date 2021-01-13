from os import listdir
from os.path import isfile, join
import os

PATH='./components/'
onlyfiles = [os.path.join(dp, f) for dp, dn, filenames in os.walk(PATH) for f in filenames ]
for i in range(len(onlyfiles)):
    onlyfiles[i]=onlyfiles[i].replace("\\", '/')

with open("index_template.html", encoding="utf8") as f:
    lines = f.readlines()
    with open("index.html", "w", encoding="utf8") as f1:
        f1.writelines(lines)


# mypath = './components/'
# onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]
# print(onlyfiles)
# exit()



def insert_to_file(file_name,pattern,content):
    with open("index.html",encoding="utf8") as f:
        lines = f.readlines()
        lineNum_to_insert = 0
        for idx,line in enumerate(lines):
            if pattern in line:
                lineNum_to_insert=idx
                break
        print(pattern,lineNum_to_insert)
        if lineNum_to_insert>0 :
            with open("index.html", "w+",encoding="utf8") as f1:
                widx=0
                for line in lines[0:lineNum_to_insert+1]:
                    f1.writelines(line)
                f1.write(content)
                for line in lines[lineNum_to_insert+1:]:
                    f1.writelines(line)


for eachFile in onlyfiles:
    # print(os.path.getsize(eachFile))
    with open(eachFile,encoding="utf8") as f:
        content = f.read()
        insert_to_file("index.html",eachFile.split("/")[-1],content)
