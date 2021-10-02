var isSymmetric = function(root) {
         if (root==null ||root.left == null && root.right == null) return true; // checking if binary tree is mirror of itself
       let left = root.left; / traverse b the tree
        let right = root.right;
        return check(left, right); / return value from check on tree after evaluating constraints 
    }
    let check = function( l, r) {
        if (l == null && r == null) return true;
        else if (l==null || r==null) return false;
        else if (l.val != r.val) return false;
        return check(l.left, r.right) && check(l.right, r.left);
    }

    
    /*
    Success
Details 
Runtime: 72 ms, faster than 98.46% of JavaScript online submissions for Symmetric Tree.
Memory Usage: 41.1 MB, less than 27.55% of JavaScript online submissions for Symmetric Tree.
*/
