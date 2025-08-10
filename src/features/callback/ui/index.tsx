import { memo, useCallback, useState, type ChangeEvent, type FC } from 'react';
import { Label } from '@/shared/ui/components/ui/label';
import { Input } from '@/shared/ui/components/ui/input';
import { type CallBackModel } from '@/entities/callback/types/_base';
import { useMask } from '@react-input/mask';
import { Button } from '@/shared/ui/components/ui/button';
import { callToast } from '@/features/toast/services';
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogTrigger,
    AlertDialogAction,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogFooter,
    AlertDialogCancel,
} from '@/shared/ui/components/ui/alert-dialog';
import { Textarea } from '@/shared/ui/components/ui/textarea';
import { postCallbackApi } from '../';
import styles from './styles.module.scss';

// подумать над тем, чтобы вынести в отдельный слайс
const FormContent = memo(
    ({
        callbackModel,
        handleChange,
    }: {
        callbackModel: CallBackModel;
        handleChange: (
            e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        ) => void;
    }) => (
        <div>
            <div className={styles.form__block}>
                <Label>Ваше имя</Label>
                <Input
                    value={callbackModel.name}
                    name='name'
                    onChange={handleChange}
                />
            </div>
            <div className={styles.form__block}>
                <Label>Комментарий</Label>
                <Textarea
                    value={callbackModel.description}
                    name='description'
                    onChange={handleChange}
                />
            </div>
            <div className={styles.form__block}>
                <Label>Номер телефона</Label>
                <Input
                    ref={useMask({
                        mask: '+_ (___) ___-__-__',
                        replacement: { _: /\d/ },
                    })}
                    placeholder='+7'
                    type='tel'
                    value={callbackModel.phone}
                    name='phone'
                    onChange={handleChange}
                />
            </div>
        </div>
    ),
);

export const CallBack: FC = () => {
    const { send } = postCallbackApi;
    const [callbackModel, setCallbackModel] = useState<CallBackModel>({
        name: '',
        description: '',
        phone: '',
    });

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setCallbackModel((prev) => ({ ...prev, [name]: value }));
        },
        [],
    );

    const handleSubmit = async () => {
        try {
            await send(callbackModel);
            callToast(false, 'Заявка успешно отправлена!');
        } catch (error: any) {
            callToast(true, error.response.data.message);
        }
    };

    return (
        <>
            {/* desktop */}
            <div className={styles.form}>
                <h2 className='text-center'>Заявка на подбор</h2>
                <FormContent
                    callbackModel={callbackModel}
                    handleChange={handleChange}
                />
                <Button className={styles.form__button} onClick={handleSubmit}>
                    Отправить заявку
                </Button>
            </div>

            {/* mobile */}
            <div className={styles.mobile_form}>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button
                            style={{ width: '90vw' }}
                            className={`${styles.mobile_form__button} ${styles.form__button}`}
                        >
                            Оставить заявку
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent
                        style={{ display: 'block', padding: '20px 40px' }}
                        className={styles.form}
                    >
                        <AlertDialogHeader>
                            <AlertDialogTitle
                                style={{
                                    fontSize: '25px',
                                    marginBottom: '10px',
                                }}
                            >
                                Обратный звонок
                            </AlertDialogTitle>
                        </AlertDialogHeader>
                        <FormContent
                            callbackModel={callbackModel}
                            handleChange={handleChange}
                        />
                        <AlertDialogFooter>
                            <AlertDialogCancel>Отмена</AlertDialogCancel>
                            <AlertDialogAction asChild>
                                <Button
                                    className={styles.form__button}
                                    onClick={handleSubmit}
                                >
                                    Отправить заявку
                                </Button>
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </>
    );
};
