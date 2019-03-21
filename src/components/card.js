import React, { Componet} from 'react';

import Input from './input';

class Card extends Componet {
    render() {
        return (
            <div className="card">
                { Input('Color') }
                { Input('Plural Noun') }
            </div>
        )
    }
}

export default Card;