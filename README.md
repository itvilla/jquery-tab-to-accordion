# Jquery Tab to Accordion Plugin
***(use your own css in your own way)***

This plugin helps to make tabs to accordions.

## Usage

```javascript

$(".tabs").t2a();

```
## Options
**Option 1:** mobile (with of intended mobile device with to convert into accordion)

**Example:**
```javascript
$('.tabs').t2a({
	mobile: 500
});
// default 960
```

**Option 2:** nodes (array of css classes of  tab container tab title and tab content)

**Example:**
```javascript
$("tabs").t2a({
  nodes: ['.tab_container', '.tab_title', '.tab_content']
});
// default ['.tab-item', '.tab-title', '.tab-content']
```
