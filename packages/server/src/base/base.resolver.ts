import { Type } from '@nestjs/common';
import { ResolveField, Resolver, Root } from '@nestjs/graphql';
import * as humanize from 'humanize-duration';
import { Base } from './base.entity';

export const BaseResolver = <T extends Partial<Base>>(classRef: T): any => {
  @Resolver({ isAbstract: true })
  abstract class BaseResolverHost {
    @ResolveField(() => String)
    humanDate(@Root() type: T): string {
      const now = Date.now();
      const updated = Date.parse(type.updatedAt.toString());
      const diff = now - updated;
      const humanized = humanize(diff, { round: true, largest: 2 });
      return `Created ${humanized} ago`;
    }
  }
  return BaseResolverHost;
};
