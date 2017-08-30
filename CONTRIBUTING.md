## Contributing EEC_localWeather
### freeCodeCamp project

#### 1.General
Hello gents and welcome to anyone who like contributing.
freeCodeCamp project of EvilEpicCoder so it mean it actually free and in any case will be created for free,
howewer I would appreciate if you will put my name somewhere in the page if tou are using my app.
#### 2.Structure
 * Base html taken from materializecss web site, used TOAST popup from materialize, if you do not like materialize you can remove this function, and it will mot brake the code.
 * Add CSS 
 ```
 <link type="text/css" rel="stylesheet" href="materialize/css/materialize.css"  media="screen,projection"/>
 <link type="text/css" rel="stylesheet" href="lw.css"  media="screen,projection"/>
 <link type="text/css" rel="stylesheet" href="weather-icons.css"  media="screen,projection"/>
```
 * App uses jQuery, so do nit forget put jQuery ` <script type="text/javascript" src="jquery-3.2.1.min.js"></script>
  Or jQuery CDN 
 ``` <script
			  src="https://code.jquery.com/jquery-3.2.1.min.js"
			  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
			  crossorigin="anonymous"></script>
        ```
 * Add my JavaScript file `<script type="text/javascript" src="lw.js"></script>`
 * Now in 
  ``` <div class="containerX">	
		 </div>
    ```
    of your HTML file will generated weather indormation for 5 days.
 * If you like more objects change this
 ```
 if(elcount<5){
					bGeo.push(false);
					bCelsius.push(false);
					putElements(elcount++);
				}
 ``` My code still fragmented :(
 
#### 3.Support
 * I like support :3
 * Best your support - add me on twitter: https://twitter.com/EvilEpicCoder
                                or facebook https://www.facebook.com/igor.gavelyuk
 * Also I would like particitate in the projects, if you able to hire me: You welcome!
 
 #### Thats All Falks!!!
 
 Version:`0.1a`
Date: `30.08.2017`



