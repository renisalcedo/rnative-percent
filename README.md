# rnative-percent

**Percentages on Mobile the way we do on the Web**

## Description

Using percentages on the web is simple and and useful; therefore, we would like to have the same
capabilities when developing mobile apps using react native. Below are the details on using rnative-percent

## Getting Started

```bash
yarn add rnative-percent

 OR

npm --save rnative-percent
```

By default, calling percent with a given value will be based on the height percentage. To get the percentage
for the width just pass a second paratemer with the string of 'width' as shown in the following example:

```javascript
import percent from 'rnative-percent'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f2f6',
    width: percent(70, 'width') // YOU CAN PASS A SECOND PARAMETER WITH THE VALUE OF WIDTH
  }
})
```

```javascript
import percent from 'rnative-percent'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f2f6',
    height: percent(70) // HERE YOU CAN PASS THE PERCENT VALUE DESIRED
  }
})
```
