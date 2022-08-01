import React, { FC, useMemo } from 'react';

import { IPerson } from '../../models/IPerson';
import { kinopoiskApi } from '../../services/KinopoiskService';
import { StaffLine } from '../UI/StaffLine/StaffLine';

type StaffProps = {
    filmId: number;
};

export const Staff: FC<StaffProps> = ({ filmId }) => {
    const {
        data: staff,
        isError: isStaffError,
        isLoading: isStaffLoading,
    } = kinopoiskApi.useFetchStaffByIdQuery(filmId);

    const staffList = useMemo(() => {
        const list = {
            directors: [] as IPerson[],
            actors: [] as IPerson[],
            writers: [] as IPerson[],
            operators: [] as IPerson[],
            composers: [] as IPerson[],
            producers: [] as IPerson[],
            editors: [] as IPerson[],
        };
        // eslint-disable-next-line array-callback-return
        staff?.map((person: IPerson) => {
            switch (person.professionKey.toLowerCase()) {
                case 'director':
                    list.directors.push(person);
                    break;
                case 'actor':
                    list.actors.push(person);
                    break;
                case 'writer':
                    list.writers.push(person);
                    break;
                case 'operator':
                    list.operators.push(person);
                    break;
                case 'composer':
                    list.composers.push(person);
                    break;
                case 'producer':
                    list.producers.push(person);
                    break;
                case 'editor':
                    list.editors.push(person);
                    break;
            }
        });
        return list;
    }, [staff]);

    return (
        <div>
            {isStaffLoading && <div>Loading...</div>}
            {isStaffError && <div>Error!</div>}
            {staffList && (
                <span>
                    <StaffLine role="Director" list={staffList.directors} />

                    <StaffLine role="Actor" list={staffList.actors} />

                    <StaffLine role="Writer" list={staffList.writers} />

                    <StaffLine role="Operator" list={staffList.operators} />

                    <StaffLine role="Composer" list={staffList.composers} />

                    <StaffLine role="Producer" list={staffList.producers} />

                    <StaffLine role="Editor" list={staffList.editors} />
                </span>
            )}
        </div>
    );
};
