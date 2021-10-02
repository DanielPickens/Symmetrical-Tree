var isSymmetric = function(root) {
         if (root==null ||root.left == null && root.right == null) return true;
       let left = root.left;
        let right = root.right;
        return check(left, right);
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
