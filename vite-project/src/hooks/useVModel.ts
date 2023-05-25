import { computed } from "vue";

export function useVModel(props: any, propName: string, emit: any) {
    return computed({
        get(){
            if(typeof props[propName] === 'object'){
                
                return new Proxy(props[propName], {
                    set(obj, name, val){
                        emit(`update:${propName}`, {
                            ...obj,
                            [name]: val
                        })
                        return true;
                    }
                });
            }else{
                return props[propName]
            }
        },
        set(val){
            emit(`update:${propName}`, val)
        }
    })
}