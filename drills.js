/* # 3 -----------------------------------------
Imagine you are looking for a book in a library with a Dewey Decimal index. 
How would you go about it? Can you express this process as a search 
algorithm? Implement your algorithm to find a book whose Dewey 
and book title is provided. */

// As a human you would use a linear search since that is most efficient way for us to 
// think about the location
// ---------------------------------------------
// a computer only accepts instructions so a binary search is more efficient for a computer
// in most cases.
// ---------------------------------------------
// I.E. 153.43 CHR
// To find a book in the dewey decimal system you would take a linear approach
// however, you would not need to start at index 0
// You would first search for the 3 character Section by looking at the section that
// is closest to you and using it as a reference to decide which way to walk in 
// order to end at the destination shelf
// Once at the shelf , it is a linear search as you browse the decimal numbers
// in numerical order.
// finally you look for the authors name the same way, starting at the left(A)
// and stopping when you find the book you want

// #4
/* (1) Given a binary search tree whose in-order and pre-order traversals
 are respectively 14 15 19 25 27 35 79 89 90 91 and 35 25 15 14 19 27 89 79 91 90. 
 What would be its postorder traversal? */

// P -> L -> R
// Input2 (pre order): 35 25 15 14 19 27 89 79 91 90
// Output2:
// ------------------------------
// L -> P -> R
// Input (in order) : 14 15 19 25 27 35 79 89 90 91
// Output1: 14 15 19 25 27 35 79 89 90 91
// ------------------------------ 
// L -> R -> P
// Input3(post order): 
