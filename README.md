這是一個可以管理GitHub專案的網頁:
  
1.安裝相關軟體或套件:Visual Studio Code、Node.js  
  
2.啟動專案：
在Visual Studio Code的終端機輸入:  
git clone https://github.com/huahua1215/GitHub-ISSUE-API.git  
cd DcardHw  
npm install  
npm start  
  
3.專案架構：  
DcardHw/  
  |-src/  
  |  |-pages/  
  |  |  |-Home/  
  |  |  |  |-components/  
  |  |  |  |  |-login.js  
  |  |  |  |  |-search.js  
  |  |  |  |  |-search.css  
  |  |  |  |  |-TaskList.js  
  |  |  |  |  |-TaskList.css  
  |  |  |  |-index.js  
  |  |  |  |-index.css  
  |  |  |-NewTask/  
  |  |  |  |-components/  
  |  |  |  |  |-add.js  
  |  |  |  |  |-add.css  
  |  |-index.js  
  |-sever.js  
  |-README.md  
  |-package.jason  
  |-package-lock.json  
  
  4.專案說明:  
  很抱歉，此專案功能還未齊全，仍在努力開發當中，目前具備的功能有:  
  使用者授權GitHub API，能夠看到專案的issue及comment的內容及狀態、可以關閉issue、並且能依照時間和狀態進行排序、一次最多顯示十筆資料，若超過會發送API請求。  
    
  仍在研究的功能有:  
  將新增issue功能的頁面連結到主畫面、開發編輯issue的功能、開發搜尋issue的功能、contact me頁面的製作、美化整個網頁畫面。  
