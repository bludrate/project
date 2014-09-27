define([], function(){
    'use strict';

    return {
        /**
         * Extend ChildClass from ParentClass
         * @param {Function} ChildClass
         * @param {Function} ParentClass
         */
        inherit: function (ChildClass, ParentClass) {
            var Tmp = function () {};

            Tmp.prototype = ParentClass.prototype;
            ChildClass.prototype = new Tmp();
            ChildClass.prototype.constructor = ChildClass;
            ChildClass.super = ParentClass.prototype;
        }
    };
});