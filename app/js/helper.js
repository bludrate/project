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
        },

        isEmpty: function (obj) {

            if (!obj) return true;

            if (obj.length > 0)    return false;
            if (obj.length === 0)  return true;

            for (var key in obj) {
                if (hasOwnProperty.call(obj, key)) return false;
            }

            return true;
        }
    };
});