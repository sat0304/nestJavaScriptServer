import { Column, DataType, HasMany, HasOne, Model, Table } from "sequelize-typescript"
import { Profile } from "src/profile/profile.model";
import { Text } from "src/texts/texts.model";

interface userCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'user'})
export class User extends Model<User, userCreationAttrs> {
    @Column({type: DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true
            })
    id: number;

    @Column({type: DataType.STRING,
        unique: true,
        allowNull: false
        })
    email: string;

    @Column({type: DataType.STRING,
        allowNull: false
        })
    password: string;

    @Column({type: DataType.BOOLEAN,
        defaultValue: false
        })
    isAdmin: boolean;

    @HasOne(() => Profile, {
        onDelete: 'CASCADE',
    })
    profile: Profile;

    @HasMany(() => Text)
    texts: Text[];
}