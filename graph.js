// create a graph class
//code can be found on geeksforgeeks.org
class Graph {
    // defining vertex array and
    // adjacent list
    constructor(noOfVertices)
    {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }
  
  // add vertex to the graph
addVertex(v)
{
    // initialize the adjacent list with a
    // null array
    this.AdjList.set(v, []); //left is the key right is the value of that key
}
    // addEdge(v, w)
    // add edge to the graph
addEdge(v, w)
{
    // get the list for vertex v and put the
    // vertex w denoting edge between v and w
    this.AdjList.get(v).push(w);
  
    // Since graph is undirected,
    // add an edge from w to v also
    this.AdjList.get(w).push(v);
}
    // printGraph()
  // Prints the vertex and adjacency list
printGraph()
{
    // get all the vertices
    var get_keys = this.AdjList.keys();
  
    // iterate over the vertices
    for (var i of get_keys) 
{
        // great the corresponding adjacency list
        // for the vertex
        var get_values = this.AdjList.get(i);
        var conc = "";
  
        // iterate over the adjacency list
        // concatenate the values into a string
        for (var j of get_values)
            conc += j + " ";
  
        // print the vertex and its adjacency list
        console.log(i + " -> " + conc);
    }
}

    // bfs(v)
    // dfs(v)
}
let list = new Graph(6) //the number of vertices making up the graph, so 6 nodes needing to be connected somehow(undirected)
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
for(let i=0; i<vertices.length; i++){
    list.addVertex(vertices[i]) //loop over vertices array and add each element with addVertex() method 
}
//ctrl+shift+alt+down or up arrow
list.addEdge('A', 'B');
list.addEdge('A', 'D');
list.addEdge('A', 'E');
list.addEdge('B', 'C');
list.addEdge('D', 'E');
list.addEdge('E', 'F');
list.addEdge('E', 'C');
list.addEdge('C', 'F');
list.printGraph()