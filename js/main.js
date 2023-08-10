let jq = $.noConflict();

jq(document).ready(function(){
    const btns = jq('.btn');
    const imgDataes = jq('.img-fluid');

    btns.each((btn)=>{
        btns.click(function(e){
            const filter = e.target.dataset.filter;

            imgDataes.each((item)=>{
                if(filter === 'all'){
                    jq(imgDataes[item]).css('display','block');
                }else{
                    if(jq(imgDataes[item]).hasClass(filter)){
                        jq(imgDataes[item]).css('display','block');
                    }else{
                        jq(imgDataes[item]).css('display','none');
                    }
                }
            });

        });
    });
});
