var tips;//�������
var theTop = 30; //ͷ������ֵ
var old = theTop;//
   function initFloatTips() {
      tips = document.getElementById('Kf');//��ȡ�������Ŀ�
      moveTips();
   };
   
   function moveTips() {
      var tt=50;
      if (window.innerHeight) {//NS�����ר�õ�
         pos = window.pageYOffset//�����ĸ߶�
      }else if (document.documentElement && document.documentElement.scrollTop){
        pos = document.documentElement.scrollTop
    }else if (document.body) {
        pos = document.body.scrollTop;
    }


     pos=pos-tips.offsetTop+theTop;//�����ڿ��ü������������
     pos=tips.offsetTop+pos/10;
     if (pos < theTop) pos = theTop;
     if (pos != old) {
        tips.style.top = pos+"px";
        tt=10;
    }
   old = pos;
   setTimeout(moveTips,tt);
       }
          initFloatTips();
