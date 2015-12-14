'use strict';


module.exports = [ 'domain',
    function(domain) {

        //this.checkLoginInfo = domain + '/api/Customer/CustomerGetById_xc';
        //return this;

        //http://srdemo.smartac.co/api/Customer/CustomerGetById_xc/{openID}/{wechataccountid}
        //http://srdemo.smartac.co/api/Customer/CustomerUpdate_xc
        //http://srdemo.smartac.co/api/rewardsprogram/GetCouponDetailList_xc/{code:int?}
        //http://srdemo.smartac.co/api/rewardsprogram/CouponGetById_xc/%7bID%7d
        //http://srdemo.smartac.co/api/rewardsprogram/custreceivecoupon_xc/{openid}/{couponid}/{qnty}
        //http://srdemo.smartac.co/api/rewardsprogram/CouponInsGetByCustId_xc/{openID}/{wechataccountid}
        //http://srdemo.smartac.co/api/Campaign/Point/SearchPointMainByCustID_xc/%7bopenID%7d/%7bwechataccountid%7d
        //http://srdemo.smartac.co/api/Campaign/Point/SearchPointDetailAll_xc/{openID}/{wechataccountid}
        //http://srdemo.smartac.co/api/rewardsprogram/customerusecoupon_xc/{openid}/{couponno}/{couponid?}

        //http://srdemo1.smartac.co/dqcodegen?symbology=58&size=300&fg_color=000000&bg_color=ffffff&case=1&txt=http://w.url.cn/s/AqQ8yg5&margin=1&level=0&hint=2&ver=2
        //scancodeVerificationUrl: "http://115.29.190.162/dqcodegen?symbology=58&size=300&fg_color=000000&bg_color=ffffff&case=1&txt=http://w.url.cn/s/AqQ8yg5&margin=1&level=0&hint=2&ver=2",


        //http://srdemo.smartac.co/api/rewardsprogram/customerusecoupon_xc/{openid}/{couponno}/{couponid?}


        return {
            wechataccountid: "gh_4ffca3361cb7",
            imgDomainUrl: domain + "/showimg/",
            memberInfoUrl: domain + '/api/Customer/CustomerGetById_xc/',
            updateMemberInfoUrl: domain + '/api/Customer/CustomerUpdate_xc/',
            couponUrl: domain + '/api/rewardsprogram/GetCouponDetailList_xc/',
            couponDetailUrl: domain + '/api/rewardsprogram/CouponGetById_xc/',
            receiveCouponUrl: domain + '/api/rewardsprogram/custreceivecoupon_xc/',
            memberCouponUrl: domain + '/api/rewardsprogram/CouponInsGetByCustId_xc/',
            memberIntegralUrl: domain + '/api/Campaign/Point/SearchPointMainByCustID_xc/',
            memberIntegrallistUrl: domain + '/api/Campaign/Point/SearchPointDetailAll_xc/',


            verificationCodeUrl: "http://demowifi.smartac.co:3001/sms/send",
            generateQrcodeUrl: "http://srdemo1.smartac.co/dqcodegen?symbology=58&size=300&fg_color=000000&bg_color=ffffff&case=1&margin=0&level=0&hint=2&ver=2&txt=",
            generateBarcodeUrl: "http://srdemo1.smartac.co/dqcodegen?symbology=20&size=1&case=1&txt=",
            scancodeVerificationUrl: domain + '/api/rewardsprogram/customerusecoupon_xc/'



        }
    }
];