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

```javascript
import percent from 'rnative-percent'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f2f6',
    height: percent(70) // HERE YOU CAN PASS THE PERCENT VALUE DESIRED
  }
})
```
