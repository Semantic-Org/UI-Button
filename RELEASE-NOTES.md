### Version 2.2.10 - March 28, 2017

- **Button** - Fixes `@basicActiveBoxShadow` being used incorrectly in basic button variables
- **Modal** - `onDeny` and `onApprove` callbacks can no longer occur multiple times if you rapidly click a approve/deny button in a. #4479

#### Dropdown

- **Button** - Fixed issue where css specificity caused `icon buttons` to not center correctly [#4487](https://github.com/Semantic-Org/Semantic-UI/pull/4487)

### Version 2.2.3 - August 21, 2016

- **Button/Dropdown** - Fixed issue where `ui dropdown button` could have incorrect spacing for dropdown icon **Thanks @ilanus** [#4408](https://github.com/Semantic-Org/Semantic-UI/issues/4408)
- **Button** - Fixed `vertical buttons` with only 1 button having incorrect border radius **Thanks @Denhai** [#4107](https://github.com/Semantic-Org/Semantic-UI/issues/4107)

### Version 2.2.0 - June 26, 2016

- **Button** - Added compatibility with `primary` `secondary` `positive` `negative` buttons with the `basic` styling variation. [#3756](https://github.com/Semantic-Org/Semantic-UI/issues/3756)
- **Button** - Added variables for configuring `disabled` background image and box shadow.
- **Button** - `right icon` like `right arrow icon` would have additional margin inside an `icon button` [#3525](https://github.com/Semantic-Org/Semantic-UI/issues/3525)
- **Button** - Fixed issue where `disabled loading button` would not remove `pointer-events` [#2933](https://github.com/Semantic-Org/Semantic-UI/issues/2933)
- **Button** - Fixed typo in `green inverted button` [#3873](https://github.com/Semantic-Org/Semantic-UI/issues/3873)
- **Button/Dropdown** - Button dropdowns using `default text` no longer receive incorrect font styling for placeholder text
- **Checkbox** - Radio buttons received `indeterminate` styles when user has not yet interacted with the page in Chrome
- **Input** - Fixes issue with `dropdown` or button on the left side of an `action` input not properly rounding

### Version 2.1.5 - Nov 1, 2015

- **Examples** - All code examples now have a "copy to clipboard" button **Thanks @xiwc and @zenorocha for clipboard.js**
- **Sticky** - Fixed issue where pressing home/end button would cause sticky to break due to internal logic not allowing immediate jump from bottom attached to top attached, experienced most likely when pressing "home" or "end" key [#3011](https://github.com/Semantic-Org/Semantic-UI/issues/3011)

### Version 2.1.4 - Sep 13, 2015

- **Button** - Fixes `right labeled icon button` with a `right` named icon (for example `right arrow`) having incorrect margin on icon. [#2973](https://github.com/Semantic-Org/Semantic-UI/issues/2973)

### Version 2.1.3 - Sep 03, 2015

- **Input** - `action input` now correctly show focused border on button side, and avoids duplicating borders

#### Features

- **Button** - `colored basic` button are now colored before `:hover` in the default theme, this is more in line with common usage across other websites.
- **Button** - Added `labeled button` variation for display a count next to a button.

#### Bugs

- **Button** - Fixes inverted button missing an `active` and `active focus` state [#2635](https://github.com/Semantic-Org/Semantic-UI/issues/2635)
- **Button** - Fixes issue where `basic button` would not have focus color text when colored [#2264](https://github.com/Semantic-Org/Semantic-UI/issues/2264)
- **Input** `action input` and `labeled input` now have focused border on inner edge with label/button

### Version 2.0.7 - July 23, 2015

- **Dropdown** - Fixed border radius on `circular labeled icon button`  [#2700](https://github.com/Semantic-Org/Semantic-UI/issues/2700)

### Version 2.0.4 - July 17, 2015

- **Button** - Fixed `fluid buttons` not working correctly with `<button>` due to button tags not supporting `flex` rules. [#2617](https://github.com/Semantic-Org/Semantic-UI/issues/2617)
- **Button** - Fixed colored vertical basic buttons appearing 2px offset [#2655](https://github.com/Semantic-Org/Semantic-UI/issues/2655)

### Version 2.0.0 - June 30, 2015

- **Modal** - Modal will now only close on buttons matching `deny` or `approve` selector. Any button that should hide modal on click should either match one of these selectors, or call `$('.ui.modal').modal('hide')` `onclick`.
- **Button** - `wide` variations using numbers `2 wide`, `3 wide` have been removed due to incompatibilities with some build tools. Please use `two wide`, or `three wide` instead.
- **Button** - Added `:focus` styles for all button types, all button examples in docs now are keyboard focusable using either `<button>` or `tabindex` where appropriate.
- **Input** - Action input now supports multiple buttons, and dropdown
- **Button** - Fixed `attached buttons` 1px offset when attached to segment and menu (border vs box shadow border)
- **List** - `a` elements inside a `ui list` will no longer apply styles on `ui` elements like `button` **Thanks @ahtinurme**
- **Search** - Fix `loading search` with an `icon button` causing double loaders.
- **Button** - Button focus color now uses hoverColor background instead of blue box shadow
- **Button** - `basic colored button` now grow their border size to 2px in default theme on hover

### Version 1.11.2 - March 6, 2015

- **Modal** - Fixes modal `buttons` on mobile devices to not have extra bottom padding.

### Version 1.10.3 - February 27, 2015

- **Button** - Fixes `<button>` inside `vertical buttons` not taking full container width

### Version 1.9.1 - February 18, 2015

& { @import 'src/definitions/elements/button'; }

##### LESS Component Imports

* You can also import individual definitions using `@import 'src/definitions/elements/button'`.

### UI Changes

- **Input** - Input with dropdowns is now much easier, see docs. `action input` and `labeled input` now use `display: flex`. `ui action input` now supports `<button>` tag usage (!) which support `flex` but not `table-cell`
- **Button** - Loading buttons no longer receive `pointer-events` in default theme. Added variable for `loading button` opacity.
- **Card** - Star / Like button colors have been fixed to match `ui rating` inside `card`

### Version 1.8.1 - January 26, 2015

- **Input** - Fix border radius on `ui action input` with button groups, aka `ui buttons`

### Version 1.8.0 - January 23, 2015

- **Button** - ``ui vertical basic buttons` now have dividers in default theme
- **Button** - Fixes formatting for `disabled button` inside `ui buttons`

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

- **Button** - Fixes improper active/visible state due to :not specificity (most noticeable in mousedown on a dropdown button)

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