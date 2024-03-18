import {AnimatedComponent} from "../../../components/AnimatedComponent";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {IInit} from "../../../redux/bucketSlice";

export const BucketPage = () => {

    const items: IInit[] = useSelector((state : any) => state.bucketReducer);
    useEffect(() => {console.log(items)},[items]);

    // useEffect(() => {
    //     items.filter((item) => {
    //         item.name
    //     })
    // }, [items])

    return (
        <AnimatedComponent>
            <section className={'bucket__container'}>
                <div className={'bucket__wrapper'}>
                    {items.map((item) =>
                        <div key={item.name}>
                            <AnimatedComponent>
                                <div>{item.name}</div>
                                <div>{item.price}</div>
                            </AnimatedComponent>
                        </div>

                    )}
                </div>
            </section>
        </AnimatedComponent>
    )
}