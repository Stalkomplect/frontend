import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import { CreateOrder } from '@/entities/order';
import { ShoppingCartProps } from '../../';
import { Input } from '@/shared/ui/components/ui/input';
import { Label } from '@/shared/ui/components/ui/label';
import { useMask } from '@react-input/mask';
import { Button } from '@/shared/ui/components/ui/button';
import { useShoppingCartStore } from '@/features/shopping-cart';
import { postOrderApi } from '@/features/order';
import { callToast } from '@/features/toast/services';
import styles from './styles.module.scss';

export const ShoppingCartForm: FC<ShoppingCartProps> = ({}) => {
    const { create } = postOrderApi;

    const numberRef = useMask({
        mask: '+_ (___) ___-__-__',
        replacement: { _: /\d/ },
    });

    const { items } = useShoppingCartStore();

    const getItemsIds = () => items.map((i) => i.id);

    useEffect(() => {
        setOrderModel((prev) => ({
            ...prev,
            productsId: getItemsIds(),
        }));
    }, [items]);

    const [orderModel, setOrderModel] = useState<CreateOrder>({
        name: '',
        town: '',
        phone: '',
        productsId: getItemsIds(),
    });

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setOrderModel((prev) => ({ ...prev, [name]: value }));
        },
        [],
    );

    const handleSubmit = async () => {
        if (
            orderModel.name.length >= 3 &&
            orderModel.phone.length >= 3 &&
            orderModel.town.length >= 3
        ) {
            try {
                await create(orderModel);
                callToast(false, 'Заказ успешно создан!\nОжидайте звонка');
            } catch (error: any) {
                callToast(true, error.response.data.message);
            }
        } else callToast(true, 'Вы не заполнили данные!');
    };

    if (items.length >= 1)
        return (
            <div className={styles.form}>
                <h2>Создать заказ</h2>
                <div>
                    <Label>Ваше имя</Label>
                    <Input
                        onChange={handleChange}
                        value={orderModel.name}
                        name='name'
                    />
                </div>
                <div>
                    <Label>Ваш город</Label>
                    <Input
                        onChange={handleChange}
                        value={orderModel.town}
                        name='town'
                    />
                </div>
                <div>
                    <Label>Ваш телефон</Label>
                    <Input
                        ref={numberRef}
                        placeholder='+7'
                        type='tel'
                        value={orderModel.phone}
                        name='phone'
                        onChange={handleChange}
                    />
                </div>
                <Button onClick={handleSubmit} className={styles.form__button}>
                    Создать заказ
                </Button>
            </div>
        );
};
