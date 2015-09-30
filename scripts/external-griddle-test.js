var React = require('react');
var Griddle = require('griddle-react');

var fakeData =  [
  {
    "id": 0,
    "name": "Mayer Leonard",
    "city": "Kapowsin",
    "state": "Hawaii",
    "country": "United Kingdom",
    "company": "Ovolo",
    "favoriteNumber": 7
  },
  {
    "id": 1,
    "name": "Koch Becker",
    "city": "Johnsonburg",
    "state": "New Jersey",
    "country": "Madagascar",
    "company": "Eventage",
    "favoriteNumber": 2
  },
  {
    "id": 2,
    "name": "Lowery Hopkins",
    "city": "Blanco",
    "state": "Arizona",
    "country": "Ukraine",
    "company": "Comtext",
    "favoriteNumber": 3
  },
  {
    "id": 3,
    "name": "Walters Mays",
    "city": "Glendale",
    "state": "Illinois",
    "country": "New Zealand",
    "company": "Corporana",
    "favoriteNumber": 6
  },
  {
    "id": 4,
    "name": "Shaw Lowe",
    "city": "Coultervillle",
    "state": "Wyoming",
    "country": "Ecuador",
    "company": "Isologica",
    "favoriteNumber": 2
  }
];

var ExternalSwapiComponent = React.createClass({
    getInitialState: function(){
       return  {
         "currentPage": 0,
         "maxPages": 4,
         "externalResultsPerPage": 10,
         "externalSortColumn":null,
         "externalSortAscending":true,

         "results": []
        };
    },
    setPage: function(index){

    },

    componentDidMount: function() {
      $.get(this.props.source, function(data) {

        if (this.isMounted()) {
          this.setState({
            results :data
          });
          console.log(this.state.results);
        }
      }.bind(this));
    },
    setPageSize: function(size){
    },
    render: function(){
            return (<div>

              <Griddle useExternal={true}
                      externalSetPage={this.setPage}
                      enableSort={false}
                      columns={["id", "title", "body"]}
                      externalSetPageSize={this.setPageSize}
                      externalMaxPage={this.state.maxPages}
                      externalChangeSort={function(){}}
                      externalSetFilter={function(){}}
                      externalCurrentPage={this.state.currentPage}
                      results={this.state.results}
                      tableClassName="table"
                      resultsPerPage={this.state.externalResultsPerPage}
                      externalSortColumn={this.state.externalSortColumn}
                      externalSortAscending={this.state.externalSortAscending} />
               </div>);
    }
});

React.render(<Griddle results={fakeData} />, document.getElementById('main-static'));


React.render(<ExternalSwapiComponent source="http://jsonplaceholder.typicode.com/posts"  />, document.getElementById('main-externaldata'));
 
