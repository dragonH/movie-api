# API endpoint
```
API endpoint
```
# Usage

## [Get] /movie
Description
```
Get movies
```
* Example1 (Normal request)
  ```
  curl -X GET ${API endpoint}/movie
  ```
  Description
  ```
  Return all movies
  ```
  Response example
  ```
  {
    result: true,
    movies: [
      {
        _id: "5d8ca48c06c9115752bf4ff5",
        ch_name: "平行世界的愛情故事",
        eng_name: "Parallel World Love Story",
        expectation: "78%",
        intro: "★ 改編東野圭吾結合推理與愛情的超完美傑作 日本口碑熱賣突破150萬冊！  ★ 知名團體「Kis-My-Ft2」玉森裕太主演的奇特愛情作品 ★ 「小惡魔」吉岡里帆 × 「超能演員」染谷將太 引領觀眾進入驚愕的平行世界 ★ 日本國民歌姬 宇多田光真切歌曲〈值得被嫉妒的人生〉為本作主題曲   究竟哪一邊才是真實世界？ 敦賀崇史（裕森裕太 飾）與三輪智彥（染古將太 飾）任職於腦部研究的高科技公司，兩人從小就是好朋友，彼此互相尊重也是良性競爭的對手。某日，智彥帶了一名女孩與崇史見面，沒想到那就是崇史從學生時期就朝思暮想的津野麻由子（吉岡里帆 飾）。   某天早上，崇史醒來後發現麻由子竟成為自己的戀人，為自己做早餐。麻由子究竟是「好友的女友」還是「自己的女友」呢？這兩個截然不同的世界，徹底令崇史陷入瘋狂……",
        movie_id: "10096",
        poster_url: "https://movies.yahoo.com.tw/x/r/w420/i/o/production/movies/August2019/S3xxJL4TmNGUKQ9jYzvj-1984x2835.JPG",
        release_date: "2019-09-06",
        trailer_url: ""
      },
    ]
  }
  ```
* Example2 (with query)
  ```
  curl -X GET ${API endpoint}/movie?date=2019-09-18
  ```
  Description
  ```
  Return movies that release during the week of the date.
  
  For example date=2019-09-18

  will return all movies that release between 2019-09-16 and 2019-09-22

  ```
  response example
  ```
  {
    result: true,
    movies: [
      {
        _id: "5d8ca48c06c9115752bf4feb",
        ch_name: "妒火的詛咒─娜迦",
        eng_name: "Nakee 2",
        expectation: "63%",
        intro: "★打破泰國電視影史收視紀錄 超高人氣《娜迦》終搬大銀幕 ★橫掃泰國4億票房 榮登2018年度票房冠軍 ★泰國神劇《娜迦》原班人馬Taew Natapohn、Ken P再續前緣 ★《把哥哥退貨可以嗎》女神Yaya、男神Nadech泰劇國民CP奇幻愛情鉅作 ★一場孽戀的結束 揭開一段輪迴情緣的開始   平靜的東北村莊，幾周以來不斷發生駭人聽聞的殺人事件，死者各個面目猙獰、死狀悽慘。 憤怒又害怕的村長和村民們議論紛紛、憶起多年前「娜迦發怒毀村事件」，巫師指稱平日侍奉娜迦神殿的索伊就是娜迦的化身，為免去娜迦蛇后再次大開殺戒，村民決議動用私刑、火燒索伊。 與此同時，東泰督察被派往該村調查這幾起令人匪夷所思的案件，不相信神鬼之說的東泰極力反對暴行，並誓言找出真相！隨著案件推進，他逐漸對索伊產生感情，當他越接近真相，事情越發詭異，而這些神秘事件背後，竟隱藏令人痛徹心扉的淒美輪迴故事？   【關於娜迦】   娜迦是印度神話中的「蛇神」。是種生物的外表類似巨大的蛇，在婆羅門教、印度教和佛教經典中常出現。在印度，娜迦被視為泉水、井水和河流的保護神。在漢傳佛教中娜迦等同於龍，翻譯為神龍。又為天龍八部的其中之一。天龍八部是佛教的護法神，當人們心存善念修行佛教時，龍部就會被派遣下來保護修行者，此稱為「順法行」善族龍王。不過，假設為心無正念的行善布施，則會投身為另一種「不順法行」的惡龍存在。 在婆羅門教神話中，娜迦與大鵬金翅鳥是死敵。類似的傳說也出現在印度神話之中。",
        movie_id: "9994",
        poster_url: "https://movies.yahoo.com.tw/x/r/w420/i/o/production/movies/August2019/fJqB892V851kwDjnyIKX-506x720.jpg",
        release_date: "2019-09-20",
        trailer_url: "https://movies.yahoo.com.tw/video/%E5%A6%92%E7%81%AB%E7%9A%84%E8%A9%9B%E5%92%92-%E5%A8%9C%E8%BF%A6-%E5%AE%8C%E6%95%B4%E9%A0%90%E5%91%8A-075332283.html?movie_id=9994"
      },
    ]
  }
  ```
## [Post] /movie
Description
```
Add a new movie
```
*Example1
  ```
  curl ${API endpoint}/movie -X POST -i -H "Content-Type:application/json" -d '${movie data}'

  movie data
  {
    "ch_name": "",
    "eng_name": "",
    "expectation": "",
    "intro": "",
    "movie_id": "",
    "poster_url": "",
    "release_date": "",
    "trailer_url": "" // optional
  }
  ```
  Response
  ```
    {
      result: true
    }
  ```
## [Put] /movie
Description
```
Update an existing movie
```
* Example1(Update movie name)
  ```
  curl ${API endpoint}/movie -X PUT -i -H "Content-Type:application/json" -d '{\"movie_id\" : \"9994\", \"ch_name\" : \"妒火的詛咒─娜迦new\"}'
  ```
  Description
  ```
  Update movie name by movie_id
  ```
  Response
  ```
  {
    result: true
  }
  ```