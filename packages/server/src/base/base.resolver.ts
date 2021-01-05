import { Type } from '@nestjs/common';
import { ResolveField, Resolver, Root, Field } from '@nestjs/graphql';
import * as humanize from 'humanize-duration';
import { Base } from './base.entity';

export const BaseResolver = <T>(classRef: T): any => {
  @Resolver(() => classRef, { isAbstract: true })
  abstract class BaseResolverHost {
    @ResolveField(() => String)
    humanDate(@Root() type: T): string {
      const now = Date.now();
      const updated = Date.parse(
        ((type as unknown) as Base).updatedAt.toString(),
      );
      const diff = now - updated;
      const humanized = humanize(diff, { round: true, largest: 2 });
      return `Created ${humanized} ago`;
    }
  }
  return BaseResolverHost;
};
