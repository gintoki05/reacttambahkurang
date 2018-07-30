import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter nama="Liverpool" />
        <Counter nama="SFC" />
        <Counter nama="Chelsea" />
      </div>
    );
  }
}

export default App;

// class Header extends React.Component {
//   render() {
//     return <h1>Judul</h1>;
//   }
// }

class Counter extends React.Component {
  state = {
    angka: 0
  };

  naik = () => {
    // this.state.angka = this.state.angka + 1;
    this.setState({
      angka: this.state.angka + 1
    });
  };

  turun = () => {
    this.setState({
      angka: this.state.angka - 1
    });
  };

  render() {
    return (
      <div>
        <h1>Ranking {this.props.nama} </h1>
        {/* props singkatan dari properties */}
        <h2>{this.state.angka}</h2>
        {/* this mengarah ke class */}
        <button onClick={this.naik}>tambah</button>
        <button onClick={this.turun}>turun</button>
      </div>
    );
  }
}
