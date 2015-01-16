### Version 1.7.0 - January 14, 2015

- **Button** - Fix issue with labeled icon groups in material theme

### Version 1.6.2 - January 06, 2015

- **Button** - Fixes active orange button color

### Version 1.5.1 - January 01, 2015

- **Button** - Fixed vertical alignment of ``ui animated button``

### Version 1.5.0 - December 30, 2014

- **Input** - Fixed bug when ``ui action input`` uses a ``ui icon button``, button was receiving `i.icon` formatting.
- **List** - Fixed bug when using ``ui icon button`` or ``ui icon header`` causing element to receive icon formatting

### Version 1.4.1 - December 23, 2014

- **Button** - Fixes issue with ``will-change`` property added to ``ui button`` causing layout z-indexing issues (dropdown button)

### Version 1.4.0 - December 22, 2014

- **Button** - Fix Chrome bug with buttons sometimes not correctly repainting (particularly evenly divided groups)

### Version 1.3.1 - December 17, 2014

- **Button** - Dist version of button accidentally included ``chubby`` theme instead of ``default`` theme

### Version 1.3.0 - December 17, 2014

- **Button** - Button "or" positioning variables have been adjusted to be automatically calculated without magic numbers
- **Button** - Add tabindex /keyboard nav documentation

### Version 1.1.0 - December 02, 2014

- **Input** - ``ui action input`` can now accomodate ``ui button`` that adjust padding from default

### Version 1.0.1 - November 28, 2014

- **Card/Item** - Fix generic link stylings erroneously affecting linked ui elements like buttons

### Version 1.0.0 - November 24, 2014

- **Button** - Now has compact form, used for fitting into tight spaces
- **Button** - Now has CSS loaders to allow loading state to maintain other styles
- **Dropdown** - New action combo will change text of adjacent button, select will select element but not change text

### Version 0.15.0 - Mar 14, 2014

- **iOS** - Active styles, for example pressed in buttons, now appear in docs on touch devices

### Version 0.13.0 - Feb 20, 2014

- **Menu** - Fixes formatting of grouped icon buttons inside menus

### Version 0.12.5 - Feb 04, 2014

- **Button** - Or buttons can now have text specified using ``<div class="or" data-text"text">`` with alternate text *Thanks MohammadYounes*

### Version 0.12.4 - Jan 29, 2014

- **Input** - Fixes ``ui buttons`` to work inside an ``ui action input`` **Thanks MohammadYounes **

### Version 0.12.1 - Jan 15, 2014

- **Menu** - Fixes buttons using ``<a>`` tag from inheriting link styles. **thanks joltmode**

### Version 0.12.0 - Jan 06, 2014

- **Modal** - Buttons can now use both ``cancel/deny`` or ``ok/approve``, for approve/deny events to fire (Thanks MohammadYounes)

### Merry Christmas!

-**Transition**: Transitions now work with **any display type** not just display: block, meaning transitions can be used on buttons and other inline elements without affecting display

### Version 0.10.2 - Dec 13, 2013

- **Button** - Adds VK button
- **Input** - Action inputs now support button groups

### Version 0.9.3 - Nov 17, 2013

- **Button** - Fixes improper active/visible state due to :not specificity (most noticiable in mousedown on a dropdown button)

### Version 0.9.0 - Nov 5, 2013

- **Button** - Basic icons now have inverted style
- **Button** - UI buttons no longer have shadows, this helps match colored buttons in layouts
- **Button** - Fixes labeled icon placement in Chrome

### Version 0.8.2 - Oct 28, 2013

- **Button** - Fixes button height issue with button groups including icon and normal buttons

### Version 0.8.1 - Oct 26, 2013

- **Button** - Fixes colored version sometime losing white text color
- **Button** - Fixes 1pixel jump on animated fade buttons

### Version 0.8.0 - Oct 25, 2013

- **Button** - Default button styles have been significantly tweaked
- **Button** - Evenly divided buttons can use number classes instead of words ``class="2 buttons"``
- **Button** - New animated button styles, fade, horizontal, and vertical
- **Button** - Fixes "or" sizing to work for all sizes
- **Input** - Action buttons now have tactile feedback like normal buttons
- Added new examples to button and input

### Version 0.7.0 - Oct 22, 2013

- **Button** - New social buttons for Instagram, LinkedIn, Google Plus, Pinterest
- **Button** - Fixes vertical fluid buttons not taking up full width

### Version 0.6.1 - Oct 15, 2013

- Adds automatic menu formatting for buttons inside menus

### Version 0.1.0 - Sep 25, 2013