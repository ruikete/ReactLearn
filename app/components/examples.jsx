var React = require('react');
var {Link} = require('react-router');
// var Examples = React.createClass({
//     render: function(){
//         return(
//             <h3>Examples Component</h3>
//         );
//     }
// });
var Examples = (props) => {
    return(
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Hear are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to='/?city=Beijing'>Beijing,CN</Link>
                </li>
                <li>
                    <Link to='/?city=Toronto'>Toronto,CA</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Examples;
