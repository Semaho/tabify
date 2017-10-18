# tabify
A small "Tabs" jQuery plugin.

## Installation

Include **jQuery** and **tabify** in your HTML.

```html
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="path/to/jquery.tabify.js"></script>
```

### HTML

**Requirements :**
- A parent for your tabs and panes, `.tabs`
- `x` occurences of `.tabs__tab`
- `x` occurences of `.tabs__pane`

```html
<section class="tabs">

    <p class="tabs__tab">Tab title</p>
    <p class="tabs__tab">Tab title</p>

    <div class="tabs__pane">
        <p>Tab 0 - Content</p>
    </div>

    <div class="tabs__pane">
        <p>Tab 1 - Content</p>
    </div>

</section>
```

_Class names follow BEM notation. Source: http://getbem.com/_

### jQuery

```javascript
$('.tabs').tabify();
```

### CSS

This plugin is meant for developers, therefore there is no CSS.

Compose your page as you want as long as you follow the required CSS classes.