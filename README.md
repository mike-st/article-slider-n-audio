# article-slider-n-audio

<a href="http://www.youtube.com/watch?feature=player_embedded&v=H-9wPMq9v5Q
" target="_blank"><img src="http://img.youtube.com/vi/H-9wPMq9v5Q/2.jpg" 
alt="IMAGE ALT TEXT HERE" width="500" height="375" border="10" /><br/>CLICK ABOVE TO WATCH THE YOUTUBE VIDEO</a>

**Article Block Slider** is a C&G Kineo *presentation extension I have simple updated it's functionality to work with the deltanet/adapt-audio extension*.

The extension changes the presentation of an article's blocks from being vertically stacked to horizontally ordered. This is achieved by implementing a left and right or tabbing navigational element to the article. By default, the **Article Block Slider** is available on large resolutions only (medium and small resolutions can be added but are currently unsupported). When viewing at other resolutions the blocks return to being vertically stacked.

##Installation

Open the */src/extensions* folder in a new terminal window on Mac OSX or right click the folder and select 'Git Bash Here' on Windows.

Git clone the component, making sure to delete the hidden **.git** folder from the *article-slider-n-audio* folder.

##Settings  

The attributes listed below are used in *articles.json* to configure **Article Block Slider**, and are properly formatted as JSON in [*example.json*](https://github.com/cgkineo/article-slider-n-audio/blob/master/example.json).

**_article-slider-n-audio** (object): The Article Block Slider object that contains values for **_isEnabled**, **_slideAnimationDuration**, **_heightAnimationDuration**, **_isEnabledOnScreenSizes**, **_hasTabs**, **_hasArrows**, **_startIndex**, **_hasUniformHeight**, and **_minHeight**.

>**_isEnabled** (boolean): Turns Article Block Slider on and off. Acceptable values are true and false.

>**_slideAnimationDuration** (number): Sets the slide duration, in milliseconds, of the animation between blocks.

>**_heightAnimationDuration** (number): Sets the duration, in milliseconds, of the animation between varying blocks heights.

>**_isEnabledOnScreenSizes** (string): Defines which screen sizes the Article Block Slider displays the navigation elements on. Acceptable values are large, medium and small.

>**_hasTabs** (boolean): Turns the tab navigation on and off. If *_hasTabs* is set to true, you must set *_hasArrows* to false. Acceptable values are true and false. 

>**_hasArrows** (boolean): Turns the arrow navigation on and off. If *_hasArrows* is set to true, you must set *_hasTabs* to false. Acceptable values are true and false. 

>**_startIndex** (number): Sets which block displays on page load.

>**_hasUniformHeight** (boolean): Sets all elements within the Article Block Slider to use the highest blocks height. Acceptable values are true and false.

>**_minHeight** (number): Sets a minimum height on the *.article-block-slider* container class.

## Limitations
 
Only one navigation element (Arrows or Tabs) should be active at any one time.  
The **Article Block Slider** and **Quicknav** extensions don't interact well together when the **Article Block Slider** is the last article on a page with an enabled **Quicknav.**  
Not yet authoring tool compatible.

----------------------------
**Version number:**  2.0  
**Framework versions:**  2.0  
**Author / maintainer:** C&G Kineo / mike-st 
**Accessibility support:** WAI AA  
**RTL support:** No  
**Cross-platform coverage:** To be confirmed  
