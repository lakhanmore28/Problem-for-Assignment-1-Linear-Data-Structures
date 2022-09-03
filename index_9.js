// Q9. Write a program to reverse a stack.?//



    let st = [];

        function insert_at_bottom(x)
            {
                if(st.length==0)
                    st.push(x);
                else
                {
                
                        let a = st.pop();
                        insert_at_bottom(x);
                        st.push(a);
                }   
            }


        function reverse()
        {
            if(st.length > 0)
                {
                    
                let x = st.pop();
                reverse();
                insert_at_bottom(x);
                }
        }

        st.push('1');
        st.push('2');
        st.push('3');
        st.push('4');
        st.push('5');

        document.write("Original Stack<br>");

        document.write(st.join(" ")+"<br>");

        reverse();

        document.write("Reversed Stack<br>");

        document.write(st.join(" "));

