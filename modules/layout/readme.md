# Layout

layout (`OperationClassification` ui-cjs)



# Api reference

## `<AuthenticationLayout />`

`UserApp` with standard layout with menu from "menu" and default Header

Also handles the shortcuts keybindings for full screen and showing menu, etc.

TODO: extrahere `.menu` prop from this component completely, `.customMenu` is better. the purpose of this component is the behavior of the `layout` and putting everything together for mobile and desktop (small and large resolutions)


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 AuthenticationLayout (exported const)

`UserApp` with standard layout with menu from "menu" and default Header

Also handles the shortcuts keybindings for full screen and showing menu, etc.

TODO: extrahere `.menu` prop from this component completely, `.customMenu` is better. the purpose of this component is the behavior of the `layout` and putting everything together for mobile and desktop (small and large resolutions)


## usePing()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | { isOffline?: boolean, <br /> }   |    |



## 📄 usePing (exported const)

## `<LayoutGrid />`

Style for creating a grid for the layout that is mobile friendly and has menu support



I run into this problem all the time

https://stackoverflow.com/questions/71616561/css-tailwind-grid-height-100vh-not-working

final solution came from here

https://stackoverflow.com/questions/47094742/fullscreen-flex-layouts-necessity-of-intermediate-flex-boxes

Unfortunately, I can't seem to hide stuff anymore for some reason on non-mobile. "lg:flex hidden" just doesn't work, just hides!

My elegant solution was to just use visible/invisible and make the mobile layout hover over the invisible one in case of a small screen, it works!


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<SearchBar />`

Add small search bar to default header.

Ensure last search is visible in header search

Remove brave button from that small searchbar (only on big one is fine)


| Input      |    |    |
| ---------- | -- | -- |
| props | { isSmall?: boolean, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<UserApp />`

Layout that includes login wrapper (able to be logged in) and default pages.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 LayoutGrid (exported const)

Style for creating a grid for the layout that is mobile friendly and has menu support



I run into this problem all the time

https://stackoverflow.com/questions/71616561/css-tailwind-grid-height-100vh-not-working

final solution came from here

https://stackoverflow.com/questions/47094742/fullscreen-flex-layouts-necessity-of-intermediate-flex-boxes

Unfortunately, I can't seem to hide stuff anymore for some reason on non-mobile. "lg:flex hidden" just doesn't work, just hides!

My elegant solution was to just use visible/invisible and make the mobile layout hover over the invisible one in case of a small screen, it works!


## 📄 SearchBar (exported const)

Add small search bar to default header.

Ensure last search is visible in header search

Remove brave button from that small searchbar (only on big one is fine)


## 📄 UserApp (exported const)

Layout that includes login wrapper (able to be logged in) and default pages.

# Internal

<details><summary>Show internal (5)</summary>
    
  # `<Header />`




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<PingApi />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 Header (exported const)

## 📄 PingApi (exported const)

## 📄 { StoreProvider, useStore } (exported const)

  </details>

