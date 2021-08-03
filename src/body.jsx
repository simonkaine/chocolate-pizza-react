import React, { Component } from 'react';
import Print from './assets/print-icon.png';
import Hero from './assets/choco-pizza.png';
import './recipe.css';

const ingredients = [
    {
        id: 1,
        name: 'Milk',
        amount: '1 1/2 Cups',
    },
    {
        id: 2,
        name: 'Mascarpone',
        amount: '1/2 cup',
    },
    {
        id: 3,
        name: 'Pink Salt',
        amount: '1/2 tsp',
    },
    {
        id: 4,
        name: 'Black Mission Figs',
        amount: '1 lb',
    },
    {
        id: 5,
        name: 'Brown Sugar',
        amount: '1/2 Cup',
    },
    {
        id: 6,
        name: 'Water',
        amount: '2-4 tbsp',
    },
    {
        id: 7,
        name: 'Heavy Cream',
        amount: '1 1/2 Cups',
    },
    {
        id: 8,
        name: 'Granulated Sugar',
        amount: '1/3 Cup',
    },
    {
        id: 9,
        name: 'Egg Yolks',
        amount: '2',
    },
    {
        id: 10,
        name: 'Lemon, juiced',
        amount: '1',
    },
    {
        id: 11,
        name: 'Butter',
        amount: '2 tbsp',
    },
    {
        id: 12,
        name: 'Honey roasted pecans, roughly chopped',
        amount: '1 Cup',
    }
];

class ImageSection extends Component {
    state = {  }
    render() { 
        return ( 
        <section className='image-section'>
        <img src={Hero} alt="chocolate pizza" />
        </section>  
        );
    }
}

class IngredientsItem extends Component {
    state = {  }
    render() { 
        return ( 
            <ul>
                <li>{this.props.amount} {this.props.name}</li>
            </ul>
         );
    }
}

class IngredientList extends Component {
    state = {  }
    render() { 
        return ( 
            <section className='note-pad'>
                { 
                    ingredients.map((item) => 
                    <IngredientsItem
                    key={item.id}
                    amount={item.amount}
                    name={item.name}
                    />
                    )
                }
            </section>
         );
    }
}

class Recipe extends Component {
    state = {  }
    render() { 
        return ( 
            <body>
                <section className='left-header'>
                    <h2>Chocolate Pizza</h2>
                    <h6>POSTED ON 15TH DEC 2013 / DESSERTS</h6>
                </section>
                <section className='right-side'>
                    <img src={Print} alt="print" />Print
                </section>
                <ImageSection />
                <section className='p-tags'>
                    <p>For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. Halve all of the figs and toss in a saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.</p>
                    <p>Ice cream: In a small pot over medium heat, combine milk, and granulated sugar is completely dissolved and the milk is just barely lukewarm. Whisk in the egg yolks. Set mixture in the fridge and wait until the fig mixture is cooled.</p>
                    <p>Using an ice cream machine, pour liquids into the frozen basin and process according to manufacturer instructions, i.e., let spin and thicken for 20 minutes before adding the mascarpone, fig jam mixture, and the nuts. Continue to process for +/- 10 minutes. Pour semi-frozen mixture into a pyrex dish or glass Tupperware. Freeze for at least two hours before serving.</p>
                </section>
                <IngredientList />
                
                
            </body>
         );
    }
}
 
export default Recipe;