import * as fs from 'mz/fs';
import * as path from 'path';

export type AppSettings = {
    mongo: string;
};

export type AppSettingsFailure = {
    error: Error;
    reason: AppSettingsFailureReason;
    suggestion: string;
};

export enum AppSettingsFailureReason {
    FileParse,
    FileRead,
    MissingKeys,
}

const configFileName = 'pelican.json';
const configFilePath = path.resolve(`../../${configFileName}`);

const requiredKeys: readonly (keyof AppSettings)[] = ['mongo'];

export const readAppSettings = async (): Promise<
    AppSettings | AppSettingsFailure
> => {
    let appSettingsRaw: string;

    try {
        appSettingsRaw = (await fs.readFile(configFilePath)).toString();
    } catch (error) {
        return {
            error: error as Error,
            reason: AppSettingsFailureReason.FileRead,
            suggestion: `Does the ${configFileName} file exist?`,
        };
    }

    let appSettings: AppSettings;

    try {
        appSettings = JSON.parse(appSettingsRaw);
    } catch (error) {
        return {
            error: error as Error,
            reason: AppSettingsFailureReason.FileParse,
            suggestion: `Are the contents of ${configFileName} valid JSON?`,
        };
    }

    const missingKeys = requiredKeys.filter(
        requiredKey => !appSettings[requiredKey],
    );

    if (missingKeys.length !== 0) {
        return {
            error: new Error(`Missing keys: ${missingKeys.join(', ')}`),
            reason: AppSettingsFailureReason.MissingKeys,
            suggestion: `Do you need to recreate ${configFileName} with \`npm run setup\`?`,
        };
    }

    return appSettings;
};
