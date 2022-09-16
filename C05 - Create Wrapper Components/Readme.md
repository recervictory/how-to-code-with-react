# [How To Create Wrapper Components in React with Props](https://www.digitalocean.com/community/tutorials/how-to-create-wrapper-components-in-react-with-props)


#### Passing Details Through a Component with `...props`
The components are working well together, but there’s a slight inefficiency in AnimalCard. You are explicitly pulling diet out from the props argument, but you aren’t using the data. Instead, you are passing it through to the component. There’s nothing inherently wrong about this—in fact, it’s often better to err on the side of too much communication. But in doing this, you make your code more difficult to maintain. Whenever you want to pass new data to AnimalDetails, you need to update three places: App, where you pass the props, AnimalDetails, which consumes the prop, and AnimalCard, which is the go-between.

A better way is to gather any unused props inside AnimalCard and then pass those directly to AnimalDetails. This gives you the chance to make changes to AnimalDetails without changing AnimalCard. In effect, AnimalCard doesn’t need to know anything about the props or the PropTypes that are going into AnimalDetails.

To do that, you’ll use the object rest operator. This operator collects any items that are not pulled out during destructuring and saves them into a new object.

```
const dog = {
    name: 'dog',
    diet: ['meat']
}

const { name, ...props  } = dog;
```