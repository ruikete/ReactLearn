var React = require('react');
var {Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
//     render: function(){
//         return(
//             <div>
//                 <h3>Nav Component</h3>
//                 <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
//                 <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
//                 <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
//                 &nbsp;&nbsp;&nbsp;
//                 <a href="#/about">Go to About</a>
//             </div>
//         );
//     }
// });
var Nav = ()=>{
    return(
        <div>
                <h3>Nav Component</h3>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
                <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
                <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
                &nbsp;&nbsp;&nbsp;
                <a href="#/about">Go to About</a>
            </div>
    );
}
module.exports = Nav;
