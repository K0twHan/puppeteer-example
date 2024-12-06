import puppeteer from 'puppeteer';
const url = "https://x.com/turkcell"
const browser = await puppeteer.launch({headless : false});
const page = await browser.newPage();

await page.goto(url);

await page.setViewport({width: 1080, height: 1024});
const Descriptions : string[] = ["Hesap Adı","Gönderi Sayısı","Takip Edilen Hesap Sayısı","Takipçi Sayısı"]
const Selectors : string[] = ["#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div.css-175oi2r.r-aqfbo4.r-gtdqiz.r-1gn8etr.r-1g40b8q > div:nth-child(1) > div > div > div > div > div > div.css-175oi2r.r-16y2uox.r-1wbh5a2.r-1pi2tsx.r-1777fci > div > h2 > div > div > div > div > span.css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-poiln3.r-b88u0q.r-1awozwy.r-6koalj.r-1udh08x.r-3s2u2q > span > span:nth-child(1)","#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div.css-175oi2r.r-aqfbo4.r-gtdqiz.r-1gn8etr.r-1g40b8q > div:nth-child(1) > div > div > div > div > div > div.css-175oi2r.r-16y2uox.r-1wbh5a2.r-1pi2tsx.r-1777fci > div > div","#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div:nth-child(3) > div > div > div > div > div.css-175oi2r.r-13awgt0.r-18u37iz.r-1w6e6rj > div.css-175oi2r.r-1rtiivn > a > span.css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-poiln3.r-1b43r93.r-1cwl3u0.r-b88u0q > span","#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div:nth-child(3) > div > div > div > div > div.css-175oi2r.r-13awgt0.r-18u37iz.r-1w6e6rj > div:nth-child(2) > a > span.css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-poiln3.r-1b43r93.r-1cwl3u0.r-b88u0q > span"]
// const Account_Name_Selector = "#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div.css-175oi2r.r-aqfbo4.r-gtdqiz.r-1gn8etr.r-1g40b8q > div:nth-child(1) > div > div > div > div > div > div.css-175oi2r.r-16y2uox.r-1wbh5a2.r-1pi2tsx.r-1777fci > div > h2 > div > div > div > div > span.css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-poiln3.r-b88u0q.r-1awozwy.r-6koalj.r-1udh08x.r-3s2u2q > span > span:nth-child(1)"
// const Account_Post_Selector = "#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div.css-175oi2r.r-aqfbo4.r-gtdqiz.r-1gn8etr.r-1g40b8q > div:nth-child(1) > div > div > div > div > div > div.css-175oi2r.r-16y2uox.r-1wbh5a2.r-1pi2tsx.r-1777fci > div > div"
// const Following_Number_Selector = "#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div:nth-child(3) > div > div > div > div > div.css-175oi2r.r-13awgt0.r-18u37iz.r-1w6e6rj > div.css-175oi2r.r-1rtiivn > a > span.css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-poiln3.r-1b43r93.r-1cwl3u0.r-b88u0q > span"
// const Followers_Number_Selector = "#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > div:nth-child(3) > div > div > div > div > div.css-175oi2r.r-13awgt0.r-18u37iz.r-1w6e6rj > div:nth-child(2) > a > span.css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-poiln3.r-1b43r93.r-1cwl3u0.r-b88u0q > span"
await page.waitForSelector(Selectors[0]);

for(var i = 0;i<Selectors.length;i++)
{

    const element = await page.$(Selectors[i])    
    if (element) {
        const text = await page.evaluate(el => el.textContent, element); 
        console.log(Descriptions[i]+ " " + text); 
    } else {
        console.log('Element bulunamadı.');
    }
}
console.log("-----------------\n\n")
await page.waitForSelector('article');

   const tweet = await page.$('div[lang]')

   if(tweet)
   {
   const text = await page.evaluate(el=> el.innerText,tweet) 
   console.log("Hesabın sabitlenen ya da son Tweet'i : \n" + text)
   };



  
await browser.close();